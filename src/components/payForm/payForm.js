import React, {useContext, useEffect} from 'react';
import {Button, Container, Form} from "./payFormStyle";
import InputBox from "../inputBox/inputBox";
import GlobalContext from "../../context/context";
import {useNavigate} from "react-router-dom";

const PayForm = () => {
    const {GlobalState, GlobalDispatch} = useContext(GlobalContext);
    const {operator} = GlobalState;
    const navigator = useNavigate();
    useEffect(() => {
        if (!operator.name) {
            navigator('/')
        }
    }, [operator])
    return (
        <Form>
            <Container>
                <img src={operator.logo} alt={operator.name} width={235} height={50}/>
                <InputBox type={'tel'} name={'phoneNumber'} placeHolder={'Номер телефона'} label={'Номер'}/>
                <InputBox type={'tel'} name={'amountPay'} placeHolder={'Сумма оплаты'} label={'Сумма'}/>
                <Button type={'submit'}>Оплатить</Button>
            </Container>
        </Form>
    );
};

export default PayForm;