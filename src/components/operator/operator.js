import React from 'react';
import {Link} from "./operatorStyled";

const Operator = (props) => {
    const {name, logo} = props
    return (
        <Link href={`/pay`}>
            <img src={logo} width={'235px'} height={'50px'} alt={name}/>
        </Link>
    );
};

export default Operator;