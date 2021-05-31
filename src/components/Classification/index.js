import React from 'react';
import Imagem from '../Image/index';
import Header from '../Header/index';
import { Button, makeStyles } from "@material-ui/core";
import ResultClassification from '../ResultClassification/index'
import GetAppIcon from '@material-ui/icons/GetApp';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        position: "absolute",
        width: "100%",
        height: "100%",
        textAlign: "center",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontFamily: "Helvetica",
        width: "100px",
        display: "inline-block",
        margin: "10px",
        padding: "10px",
        borderStyle: "dotted",
        borderWidth: "thin",
        borderRadius: "5px",
        color: "black",
        cursor: "pointer",
    },
    button1: {
        fontFamily: "Helvetica",
        background: "#5d99c6",
        width: "100px",
        display: "inline-block",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        color: "white",
        cursor: "pointer",
    },
    fileinput: {
        display: "none",
    },
    p: {
        fontFamily: "Helvetica",
        color: "black",
        fontSize: "15px",
    },
    box: {
        marginTop: "10%",
        width: "95%",
        minHeight: "50%",
        margin: "auto",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        textAlign: "center",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonBack:{
        float:"left",
    }
}));


export default function Classification() {
    const [isBusy, setBusy] = React.useState(false);
    const [isBusyButton, setBusyButton] = React.useState(false);
    const [file, setFile] = React.useState("");

    const classes = useStyles();

    function handleUpload(event) {
        setFile(event.target.files[0]);
        event.target.value = null;
    }

    const refreshPage = () =>{
        window.location.reload();
    }

    const classification = () => {
        //Chamar APi
        if (file) {
            setBusy(true)
            setBusyButton(true)
        }
        else {
            alert("É necessário selecionar uma imagem")
        }
    }

    return (
        <div>
            <Header title="Esse é o título" />
            <br></br>
            <div className={classes.root}>
                <div className={classes.box}>
                <Button onClick={refreshPage} {...{ key: "Init", className: classes.buttonBack, component: RouterLink }}><ArrowBackIcon /></Button>
                    {isBusy ? (
                        <div></div>
                    ) : (

                        <div>
                            <p>Selecione uma imagem</p>
                            <input type="file" id="file" accept="image/*" onChange={handleUpload} className={classes.fileinput} />
                            <label htmlFor="file" className={classes.button}><GetAppIcon /></label>
                            {file && <Imagem image={file} />}
                            {file && <label className={classes.button1} onClick={classification}>Enviar</label>}
                        </div>
                    )}
                    {isBusyButton ? (
                        <div>
                            <ResultClassification file={file} />
                        </div>
                    ) : (
                        <div></div>
                    )
                    }
                </div>
            </div>
        </div>
    );
}
