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
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    axios
      .post("http://localhost:8080/match", jwt)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          console.log(response.data);
          setMatchedUsers(response.data);
          console.log("working");
        } else {
          alert("add a gym location to your profile");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
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
      {matchedUsers.length > 0 ? (
        <div>
          {matchedUsers.map((data) => (
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
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </MatchStyle>
  );
};

export default Match;
