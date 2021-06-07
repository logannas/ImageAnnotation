import React, {useEffect} from 'react';
import Header from '../Header/index';
import { makeStyles } from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import 'fontsource-roboto';
import './css.css'


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
    boxImage: {
        display: "flex",
        marginLeft: "10%",
        marginRight: "10%",
        minHeight: "90vh",
        justifyContent: "space-between",
        
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
    p1: {
        color: "white",
        fontSize: "12px",
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
    box1: {
        marginTop: "5%",
        width: "95%",
        minHeight: "80%",
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
    bbox: {
        marginTop: "5%",
        marginBottom: "5%",
        marginRight: "1%",
    },
    icon: {
        width: "20px",
        height: "20px",
    },
    table: {
        width: '30%',
    },
}));

export default function Segmentation() {
    const [isTable, setTable] = React.useState(false);
    const [file, setFile] = React.useState("");
    const [rows, setRows] = React.useState({});
    const [values, setValues] = React.useState();
    const canvas = React.useRef();
    let ctx = null;
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'field', headerName: 'Field', width: 90 },
        { field: 'content', headerName: 'Content', width: 105 },
    ];
    const classes = useStyles();
    var img = document.createElement("img");
    var cnvs = [];

    useEffect(() => {
        setTable(false);
      }, [file]);

    function handleUpload(event) {
        setFile(event.target.files[0]);
        event.target.value = null;
    }

    function draw() {
        img.src = URL.createObjectURL(file);
        cnvs = canvas.current;

        img.onload = function () {
            cnvs.width = img.width;
            cnvs.height = img.height;
            ctx = cnvs.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, cnvs.width, cnvs.height)
            ctx.lineWidth = 4;
        }
    }

    function extraction() {
        //Chamar APi
        if (file) {
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

            var id = jsn.class_ids

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
            makeTable(js, id);
        }
        else {
            alert("First select an image");
        }
    }

    function makeTable(rois, id) {
        var infos = [];
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        for (var obj in rois) {
            randomColor = Math.floor(Math.random() * 16777215).toString(16);
            var vet = rois[obj];
            var x = vet[1];
            var y = vet[0];
            var width = vet[3] - vet[1];
            var height = vet[2] - vet[0];
            infos[obj] = [id[obj], x, y, width, height, randomColor, false];
        }
        setValues(infos)
        setTable(true);
    }

    function ChangeSelections(change) {
        for (var i in values) {
            for (var k in change) {
                if (change[k] === values[i][0].toString()) {
                    values[i][6] = true;
                }
            }
        }

        console.log(cnvs)
        console.log(img)
        cnvs.width = img.width;
        cnvs.height = img.height;
        ctx = cnvs.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, cnvs.width, cnvs.height)
        ctx.lineWidth = 4;
        for (var obj in values) {
            if (values[obj][6] !== false) {
                ctx.strokeStyle = "#" + values[obj][5];
                ctx.beginPath();
                ctx.rect(values[obj][1], values[obj][2], values[obj][3], values[obj][4]);
                ctx.fillStyle = "#000000";
                ctx.font = 'bold 15px Helvetica';
                ctx.fillText(values[obj][0], values[obj][1] + 10, values[obj][2] + 20);
                ctx.stroke();
            }
        }
    }

    function TesteFile() {
        if (file) {
            draw();
        }
    }

    return (
        <div>
            <Header />
            <br></br>
            <div className={classes.root}>
                <div className={classes.box}>
                    <input type="file" id="file" accept="image/*" onChange={handleUpload} className={classes.fileinput} />
                    <label htmlFor="file" className={classes.button}>Browse</label>
                    <label className={classes.button} onClick={extraction}>Predict</label>
                    {TesteFile()}
                    <div className={classes.boxImage}>
                        <div>
                            <TransformWrapper>
                                <TransformComponent>
                                    <canvas ref={canvas} style={{maxWidth:"80%"}}></canvas>
                                </TransformComponent>
                            </TransformWrapper>
                        </div>
                        {isTable ? (
                            <div className={classes.table}>
                                <DataGrid rows={rows} columns={columns} checkboxSelection={true} pageSize={10} hideFooterSelectedRowCount={true} autoHeight={true} onSelectionChange={e => {
                                    for (var y in values) {
                                        values[y][6] = false;
                                    }
                                    ChangeSelections(e.rowIds);
                                }} />
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
