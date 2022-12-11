import React from "react";
import axios from "axios";

const Match = () => {
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  console.log(jwt);
  // const data = {jwt: jwt.}
  const test = () => {
    axios
      .post("http://localhost:8080/match", jwt)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          console.log(response);
        } else {
          console.log("not working");
        }
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  return <button onClick={test}>in match</button>;
};

export default Match;
