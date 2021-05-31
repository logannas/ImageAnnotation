import React from 'react';
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    header: {
        background: '#5d99c6',
        fontFamily: "Helvetica",
        color: "#000000",
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        color: "#000000",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        variant: "contained",
        color: "black",
    },
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <header>
            <AppBar className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    {props.title}
                    <Button {...{ key: "Init", to: "/", className: classes.menuButton, component: RouterLink }}>Início</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}
