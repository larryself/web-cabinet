import React from 'react';
import {Form} from "./payFormStyle";

const PayForm = () => {
    return (
        <Form>
            <img src="img/mts.svg" alt="mts" width={235} height={50}/>
            <label>Номер
                <input type="text" placeholder={'Номер телефона'}/>
            </label>
            <label>Сумма
                <input type="text" placeholder={'Сумма'}/>
            </label>
            <input type={'submit'} value={'Отправить'}/>
        </Form>
    );
};

export default PayForm;