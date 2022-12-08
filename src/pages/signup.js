import React from "react";
import { SignupStyle, SignupForm, SignupTitle } from "../styles/signup.style";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button/";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      pword: event.target.password.value,
    };
    axios
      .post("http://localhost:8080/signup", data)
      .then((response) => {
        console.log(response.data);
        if (!response.data) {
          alert("already exists");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

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
      <SignupForm onSubmit={handleSubmit}>
        <SignupTitle>Create your account</SignupTitle>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div id="email">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                required
                id="outlined-email"
                type="text"
                label="Email Address"
                name="email"
              />
            </FormControl>
          </div>
          <div id="password">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                required
                id="outlined-password"
                type="password"
                label="Password"
                name="password"
              />
            </FormControl>
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ marginBottom: "12px" }}
          >
            Sign up
          </Button>
        </Box>
      </SignupForm>
    </SignupStyle>
  );
};

export default Signup;
