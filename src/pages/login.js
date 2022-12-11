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
import LoadingButton from "@mui/lab/LoadingButton";
import jwt_decode from "jwt-decode";
import Button from "@mui/material/Button/";
import axios from "axios";
import { authContext } from "../services/authContext";

const Login = () => {
  // google sign in
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [userAuth, setUserAuth] = useState(false);
  // const { auth, setAuth } = useContext(authContext);
  const { jwt, setJwt } = useContext(authContext);
  // const { user, setUser } = useContext(authContext);
  // const { userEmail, setUserEmail } = useContext(authContext);
  // const { userJwt, setUserJwt } = useContext(authContext);
  // const { auth, setAuth } = useContext(authContext);
  // hide later maybe in env
  const google_cid =
    "13273346811-4o7mkcpdoaj7vvf426fpspc2gkisubjf.apps.googleusercontent.com";

  function handleCallbackResponse(response) {
    localStorage.clear();
    const decodedJwt = jwt_decode(response.credential);
    //console.log(decodedJwt);
    document.getElementById("signInDiv").hidden = true;
    const data = {
      google: true,
      email: decodedJwt.email,
    };
    axios
      .post("http://localhost:8080/login", data)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          //setAuth(true);
          // localStorage.setItem("token", JSON.stringify(response.data));
          // localStorage.setItem("email", decodedJwt.email);
          // localStorage.setItem("auth", true);
          console.log(JSON.stringify(response.data));
          localStorage.setItem("jwt", JSON.stringify(response.data));
          setLoading(false);
          setJwt(JSON.stringify(response.data));
          document.getElementById("signInDiv").hidden = true;
          //navigate(-1);
        } else {
          //setAuth(false);
          alert("incorrect login");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  function handleSignOut() {
    setLoading(false);
    setUser({});
    setUserEmail("");
    setPassword("");
    setJwt("");
    //setAuth(false);
    localStorage.clear();
    document.getElementById("signInDiv").hidden = false;
    console.log("signed out");
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
    localStorage.clear();
    setLoading(true);
    event.preventDefault();
    //console.log(password); // here to just get rid of warning
    setUserEmail(event.target.email.value);
    setPassword(event.target.password.value);

    const data = {
      google: false,
      email: event.target.email.value,
      pword: event.target.password.value,
    };

    axios
      .post("http://localhost:8080/login", data)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          //setAuth(true);
          // localStorage.setItem("token", JSON.stringify(response.data));
          // localStorage.setItem("email", event.target.email.value);
          // localStorage.setItem("auth", true);
          localStorage.setItem("jwt", JSON.stringify(response.data));
          document.getElementById("signInDiv").hidden = true;
          event.target.reset();
          setJwt(JSON.stringify(response.data));
          setLoading(false);
          //navigate(-1);
        } else {
          //setAuth(false);
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
        <LoginTitle>Log in to FitBud</LoginTitle>
        <Box
          component="LoginForm"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {!jwt && (
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
          {!jwt && (
            <LoadingButton
              type="submit"
              size="small"
              loading={loading}
              loadingPosition="end"
              variant="contained"
              sx={{ width: "11ch", marginBottom: "7px" }}
            >
              Login
            </LoadingButton>
          )}

          <LoginSign>
            <LoginGoogle id="signInDiv"></LoginGoogle>
            {/* {userEmail && (
              <div>
                <img src={userEmail.picture} alt="" />
                <h2>{userEmail.name}</h2>
              </div>
            )} */}
            {jwt && (
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
