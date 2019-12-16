import React from "react";
import Player from "./Player";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  cont: {
    maxWidth: "86%",
    backgroundColor: 'red',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    alignContent: 'space-between',
  }
});

const PlayerList = props => {
  const classes = useStyles();
  const { cont } = classes;
  const { playerData } = props;

  return (
    <div>
      <Container className={cont}>
        {playerData.map(person => {
          return <Player key={person.id} player={person} />;
        })}
      </Container>
    </div>
  );
};

export default PlayerList;
