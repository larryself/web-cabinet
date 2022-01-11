import React from 'react';
import {A} from "./operatorStyled";

const Operator = (props) => {
    const {name, logo, onClick} = props
    return (
        <A to={`/pay`} onClick={onClick}>
            <img src={logo} width={'235px'} height={'50px'} alt={name}/>
        </A>
    );
};

export default Operator;