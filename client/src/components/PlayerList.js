import React from "react";
import Player from "./Player";
import Container from "@material-ui/core/Container";

const PlayerList = props => {
  const { playerData } = props;

  return (
    <div>
      <Container>
        {playerData.map(person => {
          return <Player key={person.id} player={person} />;
        })}
      </Container>
    </div>
  );
};

export default PlayerList;
