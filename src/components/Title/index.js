import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    Title: {
        textAlign: "Center",
        color: "#000000",
        fontFamily: "Helvetica",
        height: "60px",
        paddingTop: "70px",
        fontSize: "18px",
    }
}));

export default function Title(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.Title}><h2>{props.title}</h2></div>
        </div>
    );
}

