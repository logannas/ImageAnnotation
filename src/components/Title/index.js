import React from 'react';
import { makeStyles } from "@material-ui/core";
import 'fontsource-roboto';

const useStyles = makeStyles(() => ({
    Title: {
        textAlign: "Center",
        color: "#000000",
        height: "60px",
        paddingTop: "80px",
        fontSize: "40px",
        fontWeight: "400",
    },
    Subtitle: {
        textAlign: "Center",
        color: "#000000",
        height: "60px",
        fontSize: "20px",
        fontWeight: "400",
    },
}));

export default function Title(props) {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.Title}>{props.title}</div>
            <p className={classes.Subtitle}>Choose one of the options below</p>
        </div>
    );
}

