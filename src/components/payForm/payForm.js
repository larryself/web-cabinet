import React from 'react';

const PayForm = () => {
    return (
        <form>
            <input type="text" placeholder={'Номер телефона'}/>
            <input type="text" placeholder={'Сумма'}/>
            <input type={'submit'} value={'Отправить'}/>
        </form>
    );
};

export default PayForm;