import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: 10
  }
});

const Player = props => {
  const classes = useStyles();
  const { card } = classes;
  const { player } = props;

  return (
    <div>
      <Card className={card}>
        <CardHeader
          title={`${player.name}`}
          subheader={`Searches: ${player.searches}`}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            Country:
            <br />
            {player.country}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Player;
