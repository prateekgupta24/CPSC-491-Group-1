import React, { useState, useEffect } from "react";
import {
  LoginStyle,
  LoginForm,
  LoginTitle,
  LoginSign,
  LoginSignout,
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

const Login = () => {
  // google sign in
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const google_cid = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  function handleCallbackResponse(response) {
    var userToken = jwt_decode(response.credential);
    console.log("JWT ID token: " + response.credential);
    setUser(userToken);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
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
    console.log(event.target.email.value); // send these to database
    //console.log(event.target.password.value);
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
        <LoginTitle>Create an account</LoginTitle>
        <Box
          component="LoginForm"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div id="username">
            <TextField
              required
              id="outlined-username"
              type="text"
              label="Username"
            />
          </div>
          <div id="password">
            <TextField
              required
              id="outlined-password"
              type="password"
              label="Password"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ marginBottom: "12px" }}
          >
            Login
          </Button>
        </Box>
        <LoginSign>
          <LoginGoogle id="signInDiv"></LoginGoogle>
          {Object.keys(user).length !== 0 && (
            <LoginSignout onClick={(e) => handleSignOut(e)}>
              Sign Out
            </LoginSignout>
          )}
          {user && (
            <div>
              <img src={user.picture} alt="" />
              <h2>{user.name}</h2>
            </div>
          )}
        </LoginSign>
        <LoginSignup>
          <text>Don't have a FitBud account?</text>
          <Link style={{ color: "black" }} to="../signup">
            {" "}
            Sign up
          </Link>
        </LoginSignup>
      </LoginForm>
    </LoginStyle>
  );
};

export default Login;
