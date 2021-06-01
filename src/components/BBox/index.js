import React, { useRef, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core";
import './css.css'

const useStyles = makeStyles(() => ({
  root: {
    float: "center",
    marginLeft: "5%",
  },
  canvas: {
    width: "50%",
  },
  table: {
    width: '20%',
    float: "right",
    marginBottom: "10%",
  },
}));

export default function BBox(props) {
  const classes = useStyles();
  const canvas = useRef();
  let ctx = null;
  var js = props.js.rois;
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
  ];
  const rows = props.rows;
  var infos = [];
  var aux = [];
  var id = props.js.class_ids;

  var img = document.createElement("img");
  img.src = URL.createObjectURL(props.image);
  var cnvs = [];

  useEffect(() => {
    draw();
  });

  function draw() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cnvs = canvas.current;

    img.onload = function () {

      cnvs.width = img.width;
      cnvs.height = img.height;
      ctx = cnvs.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, cnvs.width, cnvs.height)
      ctx.lineWidth = 4;

      for (var obj in js) {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var vet = js[obj];
        var x = vet[1];
        var y = vet[0];
        var width = vet[3] - vet[1];
        var height = vet[2] - vet[0];
        infos[obj] = [id[obj], x, y, width, height, randomColor, false];
      }
      aux = infos;
    }
  }

  function ChangeSelections(change) {
    for (var i in aux) {
      for (var k in change) {
        if (change[k] === aux[i][0].toString()) {
          aux[i][6] = true;
        }
      }
    }

    cnvs.width = img.width;
    cnvs.height = img.height;
    ctx = cnvs.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, cnvs.width, cnvs.height)
    ctx.lineWidth = 4;

    for (var obj in aux) {
      if (aux[obj][6] !== false) {
        ctx.strokeStyle = "#" + aux[obj][5];
        ctx.beginPath();
        ctx.rect(aux[obj][1], aux[obj][2], aux[obj][3], aux[obj][4]);
        ctx.fillStyle = "#000000";
        ctx.font = 'bold 15px Helvetica';
        ctx.fillText(aux[obj][0], aux[obj][1] + 10, aux[obj][2] + 20);
        ctx.stroke();
      }
    }
  }

  return (
    <div>
      <div>
        <div className={classes.root}>
          <canvas ref={canvas} className={classes.canvas}></canvas>
          <div className={classes.table}>
            <DataGrid rows={rows} columns={columns} checkboxSelection={true} pageSize={10} hideFooterSelectedRowCount={true} autoHeight={true} onSelectionChange={e => {
              for (var y in aux) {
                aux[y][6] = false;
              }
              ChangeSelections(e.rowIds)
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

