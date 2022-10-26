import React, { useState, useEffect } from "react";
import { Profile, ProfileForm } from "../styles/userprofile.style";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button/";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";

const UserProfile = () => {
  const navigate = useNavigate();

  //const [post, setPost] = useState(null);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/users/userprofiles.create", {
        body: JSON.stringify(event.target.value),
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  return (
    <Profile>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <IconButton
          onClick={() => {
            navigate(-1);
          }}
          color="primary"
          aria-label="back"
          component="label"
          style={{ justifyContent: "flex-start" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <ProfileForm onSubmit={handleSubmit}>
          <Box
            component="ProfileForm"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div id="first-name">
              <TextField
                required
                id="outlined-fname"
                type="text"
                label="First Name"
              />
            </div>
            <div id="last-name">
              <TextField
                required
                id="outlined-lname"
                type="text"
                label="Last Name"
              />
            </div>
            <div id="age">
              <TextField
                style={{ width: 75 }}
                id="outlined-age"
                label="Age"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
              />
            </div>

            <div id="height">
              <FormHelperText sx={{ m: 1 }} id="outlined-height-helper-text">
                Height
              </FormHelperText>
              <FormControl sx={{ m: 1, width: "10ch" }}>
                <OutlinedInput
                  id="outlined-adornment-feet"
                  endAdornment={
                    <InputAdornment position="end">Ft</InputAdornment>
                  }
                  aria-describedby="outlined-feet-helper-text"
                  inputProps={{
                    "aria-label": "height-feet",
                  }}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "10ch" }}>
                <OutlinedInput
                  id="outlined-adornment-feet"
                  endAdornment={
                    <InputAdornment position="end">In</InputAdornment>
                  }
                  aria-describedby="outlined-inch-helper-text"
                  inputProps={{
                    "aria-label": "height-inch",
                  }}
                />
              </FormControl>
            </div>

            <FormControl sx={{ m: 1, width: "10ch" }}>
              <div id="weight">
                <FormHelperText id="outlined-weight-helper-text">
                  Weight
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">kg</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </div>
            </FormControl>
            <div id="location">
              <TextField id="outlined-state" label="State" />

              <TextField id="outlined-city" label="City" />
            </div>
            <div id="gym">
              <TextField id="outlined-gym" type="text" label="Gym" />
            </div>
          </Box>
          <Button
            type="submit"
            variant="contained"
            style={{ marginLeft: "8px" }}
          >
            Save
          </Button>
        </ProfileForm>
      </ThemeProvider>
    </Profile>
  );
};

export default UserProfile;
