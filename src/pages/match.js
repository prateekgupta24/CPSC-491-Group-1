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
  const [orderedMatch, setOrderedMatch] = useState([]);
  const [match, setMatch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    axios
      .post("http://localhost:8080/match", jwt)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          console.log(response.data);
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
  }, []);

  const handleMatch = (event) => {
    event.preventDefault();
    console.log("matched");
    console.log(event.target.id.value);
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
      <form onSubmit={handleMatch}>
        <Grid container direction="row">
          {orderedMatch.map((data, index) => {
            return (
              <Grid card>
                <Card sx={{ maxWidth: 275, margin: "10px" }} key={index}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                      id={index}
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
                      {data.distance}
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      type="submit"
                      name="handleMatch"
                      // onClick={handleMatch}
                      // onClick={() => setMatch({ index })}
                    >
                      Match
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </form>
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
