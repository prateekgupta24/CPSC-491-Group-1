import React, { useState, useEffect, useContext } from "react";
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
import { authContext } from "../services/authContext";

const Login = () => {
  // google sign in
  const navigate = useNavigate();
  // const [user, setUser] = useState({});
  // const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const { user, setUser } = useContext(authContext);
  const { userEmail, setUserEmail } = useContext(authContext);
  const { userJwt, setUserJwt } = useContext(authContext);
  const { auth, setAuth } = useContext(authContext);
  // hide later maybe in env
  const google_cid =
    "13273346811-4o7mkcpdoaj7vvf426fpspc2gkisubjf.apps.googleusercontent.com";

  function handleCallbackResponse(response) {
    var userToken = jwt_decode(response.credential);
    console.log("JWT ID token: " + response.credential);
    setUserEmail(userToken);
    document.getElementById("signInDiv").hidden = true;
    setLogged(true);
    setAuth(true);
  }

  function handleSignOut() {
    setUser({});
    setUserEmail("");
    setPassword("");
    setLogged(false);
    setAuth(false);
    localStorage.clear();
    // const data = {
    //   email: userEmail,
    //   pword: password,
    // };
    // axios
    //   .post("http://localhost:8080/logout", data)
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //     localStorage.setItem("token", JSON.stringify(response.data));
    //     setLogged(false);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return;
    //   });
    document.getElementById("signInDiv").hidden = false;
    console.log("signed out");
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
    console.log(event.target.email.value);
    console.log(password); // here to just get rid of warning
    setUserEmail(event.target.email.value);
    setPassword(event.target.password.value);
    const data = {
      email: event.target.email.value,
      pword: event.target.password.value,
    };

    axios
      .post("http://localhost:8080/login", data)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        if (response.data) {
          setLogged(true);
          setAuth(true);
          localStorage.setItem("token", JSON.stringify(response.data));
          document.getElementById("signInDiv").hidden = true;
          event.target.reset();
          setUserJwt(JSON.stringify(response.data));
          //navigate(-1);
        } else {
          setLogged(false);
          setAuth(false);
          alert("incorect login");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
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
        <LoginTitle>Login</LoginTitle>
        <Box
          component="LoginForm"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {logged === false && (
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
        </Box>
        <Box component="span">
          {logged === false && (
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
            {/* {userEmail && (
              <div>
                <img src={userEmail.picture} alt="" />
                <h2>{userEmail.name}</h2>
              </div>
            )} */}
            {logged === true && (
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
