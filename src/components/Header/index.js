import React from 'react';
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    header: {
        background: '#2196f3',
        fontFamily: "Helvetica",
        color: "white",
    },

    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        color: "white",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        variant: "contained",
        color: "white",
    },
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <header>
            <AppBar className={classes.header}>
                <Toolbar className={classes.toolbar}>
                    <Button {...{ key: "Init", to: "/", className: classes.menuButton, component: RouterLink }}>
                    <HomeIcon />
                    &nbsp;
                    Início
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}
