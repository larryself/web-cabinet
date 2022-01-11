import React from 'react';
import {Container, Input, Label} from "./inputBoxStyle";

const InputBox = React.forwardRef(({
                                       type = 'tel',
                                       name,
                                       label,
                                       placeHolder,
                                       inputMode = 'numeric',
                                       errors,
                                       ...props
                                   }, ref) => {

    return (
        <Container>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type}
                   name={name}
                   id={name}
                   placeholder={placeHolder}
                   inputMode={inputMode}
                   ref={ref}
                   {...props}/>
        </Container>
    );
});

export default InputBox;