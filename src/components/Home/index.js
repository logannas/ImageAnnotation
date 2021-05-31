import React from 'react';
import Header from '../Header/index';
import Object from '../Object/index';
import Classification from '../Classification/index';
import Title from '../Title/index';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    Section: {
        textAlign: "center",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: "100%",
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Header title="Esse é o título" />
            <Title title="Escolha uma opção abaixo:" />
            <div className={classes.Section}>
                <Object />
                <Classification />
                <br></br>
            </div>
        </div>


    );
}
