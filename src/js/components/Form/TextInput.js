import React from 'react';

const TextInput = (props) => {
    return (
        <input
            className="Input"
            type="text"
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.changed}
            autoComplete="off"
            required
        />
    );
};

export default TextInput;