import React, { useState, useEffect } from "react";
import axios from "axios";

const Match = () => {
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const [matchedUsers, setMatchedUsers] = useState({});
  console.log(jwt);
  // const data = {jwt: jwt.}
  useEffect(() => {
    axios
      .post("http://localhost:8080/match", jwt)
      .then((response) => {
        //console.log(JSON.stringify(response.data));

        if (response.data) {
          console.log(response);
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
      <button>in match</button>
      {matchedUsers ? <div>no matched users</div> : <div>{matchedUsers}</div>}
    </div>
  );
};

export default Match;
