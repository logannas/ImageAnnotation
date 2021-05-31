import React from 'react';
import Header from '../Header/index';
import Title from '../Title/index';
import { Button, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    Section: {
        textAlign: "center",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: "100%",
    },
    button: {
        fontFamily: "Helvetica",
        background: "#5d99c6",
        width: "150px",
        display: "inline-block",
        margin: "20px",
        padding: "10px",
        borderRadius: "3px",
        color: "black",
        cursor: "pointer",
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Header title="Esse é o título" />
            <Title title="Escolha uma opção abaixo:" />
            <div className={classes.Section}>
                <Button type="button"{...{ key: "buttonSegmentation", to: "/segmentation", className: classes.button, component: RouterLink }}>Segmentação</Button>
                <Button type="button"{...{ key: "buttonClassification", to: "/classification", className: classes.button, component: RouterLink }}>Classificação</Button>
                <br></br>
            </div>
        </div>


    );
}
