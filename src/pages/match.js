import React, { useState, useEffect } from "react";
import MatchStyle from "../styles/match.style";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Match = () => {
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [orderedMatch, setOrderedMatch] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [userAddress, setUserAddress] = useState("");
  const [matchAddress, setMatchAddress] = useState("");
  const googleMapsKey = "AIzaSyAuiHqFBBIAHGvYnuBMbAAZRhs76V4ncrk";

  useEffect(() => {
    setLoading(true);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    axios
      .post("http://localhost:8080/match", jwt)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          //console.log(response.data);
          //setMatchedUsers(response.data);
          setOrderedMatch(response.data); // remove later
          setLoading(false);
        } else {
          alert("add a gym location to your profile");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    // const url = `https://maps.googleapis.com/maps/api/distancematrix/json
    //   ?destinations=${matchAddress}
    //   &origins=${userAddress}
    //   &units=imperial
    //   &key=${googleMapsKey}`;
    // var config = {
    //   method: "get",
    //   url: url,
    //   headers: {},
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));

    //     // order list of matched users here

    //
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // add distance from users into each object
    // reorder array of user objects in order of lowest distance
  }, []);

  const matchUser = (event) => {
    console.log("matched user");
    event.preventDefault();
  };

  return (
    <MatchStyle>
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
      <Grid container direction="row">
        {orderedMatch.map((data) => {
          return (
            <Grid card>
              <Card sx={{ maxWidth: 275, margin: "10px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {data.email} <br />
                    {data.fname} {data.lname}
                    <br />
                    {data.gender}
                    <br />
                    {data.height} {data.weight}
                    <br />
                    {data.gym}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    name="matchUser"
                    onClick={matchUser}
                  >
                    Match
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </MatchStyle>
  );
};
export default Match;
{
  /* 
  <MatchStyle>
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

              <Grid container direction="row">
                <Grid card>
                  <Card sx={{ maxWidth: 275, margin: "10px" }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {data.email} <br />
                        {data.fname} {data.lname}
                        <br />
                        {data.gender}
                        <br />
                        {data.height} {data.weight}
                        <br />
                        {data.gym}
                        <br />
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        name="matchUser"
                        onClick={matchUser}
                      >
                        Match
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </MatchStyle> */
}
