import React from 'react';
import Imagem from '../Image/index';
import { makeStyles } from "@material-ui/core";
import BBox from '../BBox/index';
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


export default function CObject() {
    const [isBusy, setBusy] = React.useState(false);
    const [isBusyButton, setBusyButton] = React.useState(false);
    const [file, setFile] = React.useState("");
    const [js, setJs] = React.useState({});
    const [rows, setRows] = React.useState({});

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
        let jsn = {
            "rois": [
                [
                    56, // y0
                    71, // x0
                    86, // y1
                    450 // x1
                ],
                [
                    58,
                    75,
                    86,
                    221
                ],
                [
                    506,
                    75,
                    535,
                    181
                ],
                [
                    332,
                    69,
                    362,
                    151
                ],
                [
                    157,
                    18,
                    166,
                    51
                ],
                [
                    541,
                    106,
                    580,
                    275
                ],
                [
                    89,
                    234,
                    119,
                    441
                ],
                [
                    453,
                    102,
                    504,
                    277
                ],
                [
                    242,
                    400,
                    273,
                    453
                ],
                [
                    277,
                    232,
                    307,
                    336
                ],
                [
                    277,
                    73,
                    308,
                    223
                ],
                [
                    509,
                    36,
                    653,
                    65
                ],
                [
                    564,
                    367,
                    578,
                    453
                ],
                [
                    579,
                    368,
                    593,
                    453
                ],
                [
                    607,
                    173,
                    630,
                    365
                ],
                [
                    276,
                    344,
                    307,
                    454
                ],
                [
                    503,
                    349,
                    535,
                    448
                ],
                [
                    155,
                    236,
                    240,
                    447
                ],
                [
                    170,
                    29,
                    322,
                    60
                ],
                [
                    121,
                    364,
                    152,
                    452
                ],
                [
                    4,
                    2,
                    72,
                    69
                ],
                [
                    0,
                    72,
                    58,
                    454
                ],
                [
                    122,
                    237,
                    151,
                    360
                ],
                [
                    11,
                    0,
                    639,
                    471
                ],
                [
                    93,
                    73,
                    277,
                    231
                ],
                [
                    329,
                    1,
                    658,
                    469
                ],
                [
                    0,
                    0,
                    331,
                    474
                ]
            ],
            "class_ids": [
                26,
                26,
                24,
                27,
                21,
                7,
                16,
                8,
                20,
                3,
                15,
                13,
                18,
                17,
                28,
                2,
                0,
                22,
                14,
                1,
                10,
                23,
                12,
                5,
                11,
                6,
                4
            ],
            "scores": [
                0.3247818946838379,
                0.45663607120513916,
                0.46742698550224304,
                0.5537644624710083,
                0.6272109746932983,
                0.6282179951667786,
                0.6663290858268738,
                0.7145153880119324,
                0.7679651379585266,
                0.8006713390350342,
                0.8081449270248413,
                0.8111940622329712,
                0.8128578066825867,
                0.8183708190917969,
                0.8257042765617371,
                0.8295933604240417,
                0.8330175876617432,
                0.834368884563446,
                0.8399959206581116,
                0.8432153463363647,
                0.8492744565010071,
                0.8529146313667297,
                0.8617291450500488,
                0.8826687932014465,
                0.915922224521637,
                0.9390866756439209,
                0.9472556710243225
            ]
        };

        setJs(jsn)

        var infos = [];
        var js = jsn.rois;
        var rows = [];
        var class_id = jsn.class_ids;
        var score = jsn.scores;

        for (var obj in js) {
            var vet = js[obj];
            var x = vet[1];
            var y = vet[0];
            var width = vet[3] - vet[1];
            var height = vet[2] - vet[0];
            infos[obj] = [x, y, width, height, class_id[obj], score[obj]];
            rows[obj] = { id: class_id[obj] };
        }
        setRows(rows)
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
            <label onClick={clickBusy} type="button"{...{ key: "button", className: classes.button }}>Objeto</label>
            {isBusy ? (
                <div>
                    <fieldset className={classes.fildset}>
                        <legend className={classes.legend}>Objeto</legend>
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
                        <BBox image={file} js={js} rows={rows} />
                    </fieldset>
                </div>
            ) : (
                <div></div>
            )
            }
        </div >
    );
}
