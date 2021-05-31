import React from 'react';
import '../main.css';

export default function Image(props){
    return(
        <div className="DivImage">
            <img src={URL.createObjectURL(props.image)} alt={props.name} className="imagem"/>

        </div>

    );
}
