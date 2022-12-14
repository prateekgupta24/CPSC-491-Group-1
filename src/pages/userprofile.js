import React, { useRef, useState, useEffect } from "react";
import {
  Profile,
  ProfileForm,
  ProfileTitle,
} from "../styles/userprofile.style";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import LoadingButton from "@mui/lab/LoadingButton";

const UserProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //const [post, setPost] = useState(null);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }, []);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();

    const data = {
      jwt: JSON.parse(localStorage.getItem("jwt")),
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      age: event.target.age.value,
      gender: event.target.gender.value,
      height:
        event.target.heightft.value + "'" + event.target.heightin.value + '"',
      weight: event.target.weight.value,
      // address: event.target.address.value,
      //state: event.target.state.value,
      //city: event.target.city.value,
      gym: event.target.gym.value,
    };
    axios
      .post("http://localhost:8080/userprofile", data)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    //navigate(-1);
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
          <ProfileTitle id="Title">User Profile</ProfileTitle>
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
                id="outlined-fname"
                type="text"
                label="First Name"
                name="fname"
              />
            </div>
            <div id="last-name">
              <TextField
                id="outlined-lname"
                type="text"
                label="Last Name"
                name="lname"
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
                name="age"
              />
            </div>
            <div id="gender">
              <FormControl sx={{ m: 1, width: "12ch" }}>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  label="Gender"
                  name="gender"
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
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
                  name="heightft"
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
                  name="heightin"
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
                    <InputAdornment position="end">lbs</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  name="weight"
                />
              </div>
            </FormControl>

            <div id="gym">
              <TextField
                id="outlined-gym"
                type="text"
                label="Gym"
                name="gym"
                inputRef={inputRef}
              />
            </div>
          </Box>
          <LoadingButton
            type="submit"
            size="small"
            loading={loading}
            loadingPosition="end"
            variant="contained"
            sx={{ width: "11ch", marginBottom: "7px" }}
          >
            Save
          </LoadingButton>
        </ProfileForm>
      </ThemeProvider>
    </Profile>
  );
};

export default UserProfile;
