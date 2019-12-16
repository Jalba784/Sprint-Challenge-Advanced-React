import React from 'react';
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core";
import CardHeader from "@material-ui/core";
import CardContent from "@material-ui/core";
import Typography from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
    },
});

const MyComponent = props => {
    const classes = useStyles();
    const { card } = classes;
    const { player } = props;



    return (
        <div className={card}>
            <CardHeader tittle={`${player.name}`} subheader={`Searches: ${player.searches}`} />
            <CardContent>
                <Typography variant="body2" component="p">
                    {player.country}
                </Typography>
            </CardContent>
        </div>
    );
};

export default MyComponent;
