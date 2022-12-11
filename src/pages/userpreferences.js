import React, { useRef, useEffect } from "react";
import { Preferences, PreferencesForm, PreferencesTitle } from "../styles/userpreferences.style";
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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
 
const UserPreferences = () => {
 const navigate = useNavigate();
 
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
     types: ["locality"]
    };

  useEffect(() => {
     autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
     );
    }, []);
 
 const handleSubmit = (event) => {
   event.preventDefault();
   // somehow get email
   const data = {
     myCity: event.target.myCity.value,
     age: event.target.age.value,
     gender: event.target.gender.value,
     height:
       event.target.heightft.value + "'" + event.target.heightin.value + '"',
     weight: event.target.weight.value,
     distance: event.target.distance.value,
     workout: event.target.city.value,
     gym: event.target.gym.value,
   };
   axios
     .put("http://localhost:8080/userpreferences", data)
     .then((response) => {
       console.log(response.data);
     })
     .catch((error) => {
       console.log(error);
       return;
     });
   navigate(-1);
 };
 
 return (
   <Preferences>
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
       <PreferencesForm onSubmit={handleSubmit}>
       <PreferencesTitle id="Title">User Preferences</PreferencesTitle>
         <Box
           component="PreferencesForm"
           sx={{
             "& .MuiTextField-root": { m: 1, width: "25ch" },
           }}
           noValidate
           autoComplete="off"
         >
           <div id="my-city">
             <TextField
               id="outlined-myCity"
               type="text"
               label="My City"
               name="myCity"
               inputRef={inputRef}
             />
           </div>
           <div id="age">
             <TextField
               style={{ width: 75 }}
               id="outlined-age"
               label="Age Range"
               type="number"
               InputLabelProps={{
                 shrink: true,
               }}
               variant="standard"
               name="age"
             />
           </div>
           <div id="gender">
             <FormControl sx={{ m: 1, width: "17ch" }}>
               <InputLabel id="gender-select-label">Interested In</InputLabel>
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
           <div id="distance">
             <TextField
               style={{ width: 75 }}
               id="outlined-distance"
               label="Distance"
               type="number"
               InputLabelProps={{
                 shrink: true,
               }}
               variant="standard"
               name="distance"
             />
           </div>
           <div id="workout">
             <TextField id="outlined-workout" label="Workout Style" name="workout" />
           </div>
           <div id="gym">
             <TextField id="outlined-gym" type="text" label="Gym" name="gym" />
           </div>
         </Box>
         <Button
           type="submit"
           variant="contained"
           style={{ marginLeft: "8px" }}
         >
           Save
         </Button>
       </PreferencesForm>
     </ThemeProvider>
   </Preferences>
 );
};
 
export default UserPreferences;
