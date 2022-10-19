import React from "react";
import Sub from "../styles/subscribe.style";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Subscribe = () => {
  const navigate = useNavigate();

  return (
    <Sub className="sub">
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
      <div>pls gib moni</div>
    </Sub>
  );
};

export default Subscribe;
