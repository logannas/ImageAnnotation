import React from 'react';
import Header from '../Header/index';
import Imagem from '../Image/index';
import { makeStyles } from "@material-ui/core";
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
    boxPredict: {
        minHeight: "60vh",
    },
    button: {
        background: "#2196f3",
        width: "10%",
        maxHeight: "4vh",
        display: "inline-block",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        color: "black",
        cursor: "pointer",
        marginBottom: "3%",
    },
    p: {
        color: "black",
        fontSize: "25px",
    },
    box: {
        marginTop: "5%",
        width: "95%",
        margin: "auto",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        // textAlign: "center",
        // // display: "inline-block",
        // justifyContent: "center",
        // alignItems: "center",
    },
    fileinput: {
        display: "none",
    },
}));

export default function Segmentation() {
    const [file, setFile] = React.useState("");
    const [isPredict, setPredict] = React.useState(false)

    const classes = useStyles();

    function handleUpload(event) {
        setFile(event.target.files[0]);
        event.target.value = null;
    }

    function Predict() {
        //Chamar a Api
        setPredict(true);
    }

    return (
        <div>
            <Header />
            <br></br>
            <div className={classes.root}>
                <div className={classes.box}>
                    <input type="file" id="file" accept="image/*" onChange={handleUpload} className={classes.fileinput} />
                    <label htmlFor="file" className={classes.button}>Browse</label>
                    <label className={classes.button} onClick={Predict}>Predict</label>
                    <div className={classes.boxPredict}>
                        {isPredict ? (
                            <div>
                                <p className={classes.p}>Label: <u>Real</u></p>
                                <p className={classes.p}>Probability: <u>X %</u></p>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        {file && <Imagem image={file} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
