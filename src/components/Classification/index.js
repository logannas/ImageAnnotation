import React from 'react';
import Imagem from '../Image/index';
import Header from '../Header/index';
import { Button, makeStyles } from "@material-ui/core";
import ResultClassification from '../ResultClassification/index'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link as RouterLink } from 'react-router-dom';
import 'fontsource-roboto';


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
        width: "80%",
        minHeight: "30vh",
        display: "inline-block",
        margin: "10px",
        padding: "10px",
        borderStyle: "dotted",
        borderWidth: "thin",
        borderRadius: "5px",
        color: "black",
        cursor: "pointer",
        marginBottom: "3%",
    },
    button1: {
        background: "#2196f3",
        width: "80%",
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
        marginTop: "5%",
        color: "black",
        fontSize: "25px",
    },
    box: {
        marginTop: "5%",
        width: "40%",
        margin: "auto",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonBack: {
        float: "left",
    },
    icon:{
        width:"40px",
        height:"40px",
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

    const refreshPage = () => {
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
            {isBusy ? (
                <div></div>
            ) : (
                <div className={classes.root}>
                    <div className={classes.box}>
                        <div>
                            <p className={classes.p}>Selecione uma imagem</p>
                            <input type="file" id="file" accept="image/*" onChange={handleUpload} className={classes.fileinput} />
                            <label htmlFor="file" className={classes.button}>
                                <FaCloudUploadAlt className={classes.icon}/>
                                <br></br>
                                Procure sua imagem
                                {file && <Imagem image={file} />}
                            </label>
                            {file && <label className={classes.button1} onClick={classification}>Enviar</label>}
                        </div>
                    </div>
                </div>
            )}
            {isBusyButton ? (
                < div className={classes.root}>
                    <div className={classes.box}>
                        <Button onClick={refreshPage} {...{ key: "Init", className: classes.buttonBack, component: RouterLink }}><ArrowBackIcon /></Button>
                        <ResultClassification file={file} />
                    </div>
                </div>
            ) : (
                <div></div>
            )
            }
        </div >
    );
}
