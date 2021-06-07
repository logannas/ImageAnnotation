import React from 'react';

export default function Image(props) {
    return (
        <div>
            <img src={URL.createObjectURL(props.image)} alt={props.name} style={{ width: "20%" }} />
        </div>

    );
}
