import React from 'react';
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    header: {
        background: 'linear-gradient(45deg, #426eaa 30%, #6c2978 90%)',
        fontFamily: "Helvetica",
        color: "#000000",
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        color: "white",
    },
}));

export default function Header(props) {
    const { header, toolbar } = useStyles();

    return (
        <header>
            <AppBar className={header}><Toolbar className={toolbar}>
                {props.title}
            </Toolbar></AppBar>
        </header>
    );
}
