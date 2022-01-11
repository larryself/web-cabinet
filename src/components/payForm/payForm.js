import React from 'react';
import {Button, Container, Form} from "./payFormStyle";
import InputBox from "../inputBox/inputBox";

const PayForm = () => {
    return (
        <Form>
            <Container>
                <img src="img/mts.svg" alt="mts" width={235} height={50}/>
                <InputBox type={'tel'} name={'phoneNumber'} placeHolder={'Номер телефона'} label={'Номер'}/>
                <InputBox type={'tel'} name={'amountPay'} placeHolder={'Сумма оплаты'} label={'Сумма'}/>
                <Button type={'submit'}>Оплатить</Button>
            </Container>
        </Form>
    );
};

export default PayForm;