import React, { useState, useEffect } from "react";
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
  const navigate = useNavigate();
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const [matchedUsers, setMatchedUsers] = useState([]);
  // const data = {jwt: jwt.}
  useEffect(() => {
    axios
      .post("http://localhost:8080/match", jwt)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          console.log(response.data);
          setMatchedUsers(response.data);
        } else {
          console.log("not working");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }, []);

  return (
    <div>
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
            <Grid container direction="row" id="prices">
              <Grid card>
                <Card sx={{ maxWidth: 275, margin: "10px" }} id="1-month">
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {data.email}
                      {data.fname} {data.lname}
                      {data.gender}
                      {data.height} {data.weight}
                      {data.gym}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      type="submit"
                      name="match"
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
        <div>no matched users</div>
      )}
    </div>
  );
};

export default Match;
