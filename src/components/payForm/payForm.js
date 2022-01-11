import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, GreenText, MessageBlock, RedText} from "./payFormStyle";
import InputBox from "../inputBox/inputBox";
import GlobalContext from "../../context/context";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {toPay} from "../../api/toPay";
import {changeOperator} from "../../action/action";
import {ReactComponent as ApprovedIcon} from "../../assets/img/approved.svg"
import {ReactComponent as ErrorIcon} from "../../assets/img/error.svg"

const PayForm = () => {
    const {register, handleSubmit, formState} = useForm({mode: "onChange"});
    const {isDirty, isValid, errors} = formState
    const {GlobalState, GlobalDispatch} = useContext(GlobalContext);
    const [approvedPay, setApprovedPay] = useState(false);
    const [errorPay, setErrorPay] = useState(false);
    const {operator} = GlobalState;
    const navigator = useNavigate();
    const onSubmit = async (data) => {
        try {
            await toPay(data);
            setApprovedPay(true)
            setErrorPay(false)
        } catch (e) {
            console.error(e)
            setApprovedPay(false)
            setErrorPay(true)
        }
    }
    const redirectToIndexPage = () => setTimeout(() => {
        GlobalDispatch(changeOperator(''))
    }, 3000);
    useEffect(() => {
        if (!operator.name) {
            navigator('/')
        }
    }, [operator])
    useEffect(() => {
        if (approvedPay) {
            redirectToIndexPage();
        }
    }, [approvedPay])
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Container>
                <img src={operator.logo} alt={operator.name} width={235} height={50}/>
                <InputBox type={'tel'} name={'phoneNumber'} placeHolder={'Номер телефона'}
                          label={'Номер'} {...register('phoneNumber', {required: true, minLength: 17})}/>
                <InputBox type={'tel'} name={'amountPay'} placeHolder={'Сумма оплаты'}
                          label={'Сумма'} {...register('amountPay', {required: true})}/>
                <Button type={'submit'} disabled={!isValid || !isDirty}>Оплатить</Button>
                {errors.amountPay && <span>Сумма платежа от 1 до 1000</span>}
                {approvedPay &&
                <MessageBlock><ApprovedIcon/><GreenText>Платеж выполнен, вы будете перенаправлены на начальную
                    страницу</GreenText></MessageBlock>}
                {errorPay &&
                <MessageBlock><ErrorIcon/><RedText>Платеж не выполенен, попробуйте позднее</RedText></MessageBlock>}
            </Container>
        </Form>
    );
};

export default PayForm;