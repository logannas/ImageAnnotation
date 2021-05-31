import React from 'react';
import Imagem from '../Image/index';
import { makeStyles } from "@material-ui/core";
import ResultClassification from '../ResultClassification/index'
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles(() => ({
    modal: {
        backgroundColor: "#F7FCFC",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "8%",
        height: "calc(100vh - 200px)",
        overflowY: "auto",
    },

    button: {
        fontFamily: "Helvetica",
        background: "#6C2978",
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
        color: "#ffffff",
        fontSize: "15px",
    },
    fildset: {
        width: "400px",
        margin: "auto",
    },
    fildset1: {
        background: "#f2f8ff",
        width: "95%",
        height: "100%",
        margin: "auto",
    },
    legend: {
        fontFamily: "Helvetica",
        color: "#ffffff",
        fontSize: "15px",
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

    const clickBusy = () => {
        setBusy(isBusy => !isBusy)
        setBusyButton(false)
    }

    const classification = () => {
        //Chamar APi
        if (file) {
            setBusyButton(true)
            setBusy(false)
        }
        else {
            alert("É necessário selecionar uma imagem")
        }
    }

    return (
        <div>
            <label onClick={clickBusy} type="button"{...{ key: "button", className: classes.button }}>Classificação</label>
            {isBusy ? (
                <div>
                    <fieldset className={classes.fildset}>
                        <legend className={classes.legend}>Classificação</legend>
                        <input type="file" id="file" accept="image/*" onChange={handleUpload} className={classes.fileinput} />
                        <label htmlFor="file" className={classes.button}><PublishIcon /></label>
                        <p className={classes.p}>Nome da imagem: {file.name}</p>
                        <p className={classes.p}>Tipo da imagem: {file.type}</p>
                        <p className={classes.p}>Tamanho da imagem: {file.size} bytes</p>
                        {file && <Imagem image={file} />}
                        <label className={classes.button} onClick={classification}>Enviar</label>
                    </fieldset>
                </div>
            ) : (
                <div></div>
            )
            }
            {isBusyButton ? (
                <div>
                    <fieldset className={classes.fildset1}>
                        <ResultClassification file={file} />
                    </fieldset>
                </div>
            ) : (
                <div></div>
            )
            }
        </div >
    );
}
