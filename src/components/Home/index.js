import React from 'react';
import Header from '../Header/index';
import Title from '../Title/index';
import { Button, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';
import { RiImageEditFill } from "react-icons/ri";
import { RiImageLine } from "react-icons/ri";
import 'fontsource-roboto';

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
        background: "#2196f3",
        width: "150px",
        display: "inline-block",
        margin: "20px",
        padding: "10px",
        borderRadius: "3px",
        color: "white",
        cursor: "pointer",
    },
    icon: {
        width: "40px",
        height: "40px",
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Title title="Image Annotations" />
            <div className={classes.Section}>
                <Button type="button"{...{ key: "buttonSegmentation", to: "/extraction", className: classes.button, component: RouterLink }}>
                    <RiImageEditFill className={classes.icon} />
                    <br></br>
                    Extraction
                </Button>
                <Button type="button"{...{ key: "buttonClassification", to: "/liveness", className: classes.button, component: RouterLink }}>
                    <RiImageLine className={classes.icon} />
                    <br></br>
                    Liveness
                </Button>
                <br></br>
            </div>
        </div>


    );
}
