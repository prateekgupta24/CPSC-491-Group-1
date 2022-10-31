import React, { useEffect, useState } from "react";
import SubscriptionStyle from "../styles/subscribe.style";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import axios from "axios";

const Subscribe = () => {
  const navigate = useNavigate();
  const [sub, setSub] = useState(0);
  useEffect(() => {
    console.log(sub);
    // axios
    //   .post("http://localhost:8080/subscription", sub)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return;
    //   });
  }, [sub]); // outputs the sub length in months to console

  return (
    <SubscriptionStyle id="subscription">
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
      <Grid container direction="row" id="prices">
        <Grid card>
          <Card sx={{ maxWidth: 275 }} id="1-month">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                1 Month Subscription
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                $9.99 per month
              </Typography>
              <Typography variant="body2">
                Full access to FitBud services.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                type="submit"
                name="1-month"
                onClick={() => setSub(1)}
              >
                Buy $9.99
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid card>
          <Card sx={{ maxWidth: 275 }} id="3-month">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                3 Months Subscription
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                $8.99 per month ($2.99 off)
              </Typography>
              <Typography variant="body2">
                Full access to FitBud services.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                type="submit"
                name="3-month"
                onClick={() => setSub(3)}
              >
                Buy $26.99
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid card>
          <Card sx={{ maxWidth: 275 }} id="6-month">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                6 Months Subscription
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                $7.99 per month ($11.99 off)
              </Typography>
              <Typography variant="body2">
                Full access to FitBud services.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                type="submit"
                name="6-month"
                onClick={() => setSub(6)}
              >
                Buy $47.99
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid card>
          <Card sx={{ maxWidth: 275 }} id="12-month">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                12 Months Subscription
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                $6.99 per month ($14.99 off)
              </Typography>
              <Typography variant="body2">
                Full access to FitBud services.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                size="small"
                type="submit"
                name="12-month"
                onClick={() => setSub(12)}
              >
                Buy $84.99
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </SubscriptionStyle>
  );
};

export default Subscribe;
