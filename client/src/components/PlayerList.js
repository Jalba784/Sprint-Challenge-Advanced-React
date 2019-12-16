import React, { useState, useEffect } from "react";
import axios from "axios";
import Player from "./Player";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  cont: {
    maxWidth: "86%",
    backgroundColor: "red",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "baseline",
    alignContent: "space-between"
  }
});

const PlayerList = () => {
  const classes = useStyles();
  const { cont } = classes;
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        setPlayer(res.data);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }, [player]);


  return (
    <div>
      <Container className={cont}>
        {player.map(person => {
          return <Player key={person.id} player={person} />;
        })}
      </Container>
    </div>
  );
};

export default PlayerList;
