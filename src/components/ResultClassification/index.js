import React from 'react';
import Imagem from '../Image/index';
import FormData from 'form-data';

export default function ResultClassification(props){
    const file = props.file;

    function PostLiveness(){
        let data = new FormData();
        data.append('file', file, file.name);
        console.log(file.name);

        fetch('http://10.1.3.173:5005/predict',{
            mode: 'no-cors',
            method: 'POST',
            body: data,
            headers:{
                'accept': '*/*',
                'Content-Type': 'image/*',
            }
        })
        .then(function(response) {
            console.log(response);
          })
        .catch((error) => {
            console.log(error);
        });
    }  

    return(
        <div>
            {PostLiveness()}
            <div className="upload-box Upload" >
                <p>Tipo da solicitação: Classificação de Imagem</p>
                <p>Classe: <u>Real</u></p>
                <p>Probabilidade: <u>X %</u></p>
                {file && <Imagem image={file} />}
            </div>
        </div>
    );

}

