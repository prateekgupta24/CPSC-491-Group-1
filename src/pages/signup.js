import React from "react";
import { SignupStyle, SignupForm, SignupTitle } from "../styles/signup.style";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button/";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

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
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div id="username">
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <TextField
                required
                id="outlined-username"
                type="text"
                label="Username"
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
              />
            </FormControl>
          </div>
          <Button
            type="submit"
            variant="contained"
            style={{ marginBottom: "12px" }}
          >
            Login
          </Button>
        </Box>
      </SignupForm>
    </SignupStyle>
  );
};

export default Signup;
