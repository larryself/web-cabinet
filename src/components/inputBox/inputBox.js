import React from 'react';
import {Container, Input, Label} from "./inputBoxStyle";

const InputBox = (props) => {
    const {label,type,placeHolder,name} = props
    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} id={name} placeholder={placeHolder} />
        </Container>
    );
};

export default InputBox;