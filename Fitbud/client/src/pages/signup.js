import React from "react";
import {
  SignupStyle,
  SignupForm,
  SignupTitle,
  SignupInput,
  SignupPass,
} from "../styles/signup.style";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button/";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <SignupStyle>
      <IconButton
        onClick={() => {
          navigate(-1);
        }}
        color="primary"
        aria-label="back"
        component="label"
        fullWidth={true}
        style={{ justifyContent: "flex-start" }}
      >
        <ArrowBackIosIcon style={{}} />
      </IconButton>
      <SignupForm>
        <SignupTitle>Create your account</SignupTitle>
        <div id="First-Name">
          <label>First Name</label>
          <SignupInput />
        </div>
        <div id="Last-Name">
          <label>Last Name</label>
          <SignupInput />
        </div>
        <div id="Email">
          <label>Email</label>
          <SignupInput />
        </div>
        <div id="Password">
          <label>Password</label>
          <SignupPass />
        </div>
        <Button
          variant="contained"
          style={{ marginBottom: "12px", marginTop: "-15px" }}
        >
          Create account
        </Button>
      </SignupForm>
    </SignupStyle>
  );
};

export default Signup;
