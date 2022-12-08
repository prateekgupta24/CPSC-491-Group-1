import React, { useState, useEffect } from "react";
import {
  LoginStyle,
  LoginForm,
  LoginTitle,
  LoginSign,
  LoginSignup,
  LoginGoogle,
} from "../styles/login.style";
import { useNavigate, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import jwt_decode from "jwt-decode";
import Button from "@mui/material/Button/";
import axios from "axios";

const Login = () => {
  // google sign in
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  // hide later maybe in env
  const google_cid =
    "13273346811-4o7mkcpdoaj7vvf426fpspc2gkisubjf.apps.googleusercontent.com";

  function handleCallbackResponse(response) {
    var userToken = jwt_decode(response.credential);
    console.log("JWT ID token: " + response.credential);
    setUserEmail(userToken);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut() {
    setUser({});
    setUserEmail("");
    setPassword("");
    localStorage.clear();
    document.getElementById("signInDiv").hidden = false;
    console.log(user); // delete later, just getting rid of stupid warning
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: google_cid,
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      size: "large",
      width: "102px",
    });
  }, [google_cid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserEmail(event.target.email.value);
    setPassword(event.target.password.value);
    const data = {
      email: userEmail,
      pword: password,
    };
    axios
      .post("http://localhost:8080/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    document.getElementById("signInDiv").hidden = true;
    event.target.reset();
    //navigate(-1);
  };

  return (
    <LoginStyle>
      <IconButton
        onClick={() => {
          navigate(-1);
        }}
        color="primary"
        aria-label="back"
        component="label"
        style={{ justifyContent: "flex-start" }}
      >
        <ArrowBackIosIcon style={{}} />
      </IconButton>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Log in to FitBud</LoginTitle>
        <Box
          component="LoginForm"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {Object.keys(userEmail).length === 0 && (
            <>
              <div id="email">
                <TextField
                  required
                  id="outlined-email"
                  type="text"
                  label="Email Address"
                  name="email"
                />
              </div>

              <div id="password">
                <TextField
                  required
                  id="outlined-password"
                  type="password"
                  label="Password"
                  name="password"
                />
              </div>
            </>
          )}
          {userEmail && (
            <div>
              <img src={userEmail.picture} alt="" />
              <h2>{userEmail.name}</h2>
            </div>
          )}
        </Box>
        <Box component="span">
          {Object.keys(userEmail).length === 0 && (
            <Button
              type="submit"
              variant="contained"
              style={{ marginBottom: "12px" }}
              id="login"
            >
              Login
            </Button>
          )}

          <LoginSign>
            <LoginGoogle id="signInDiv"></LoginGoogle>
            {Object.keys(userEmail).length !== 0 && (
              <Button
                variant="contained"
                style={{ marginBottom: "12px" }}
                onClick={(e) => handleSignOut(e)}
              >
                Sign out
              </Button>
            )}
          </LoginSign>
          <LoginSignup>
            <text>Don't have a FitBud account?</text>
            <Link style={{ color: "black" }} to="../signup">
              {" "}
              Sign up
            </Link>
          </LoginSignup>
        </Box>
      </LoginForm>
    </LoginStyle>
  );
};

export default Login;
