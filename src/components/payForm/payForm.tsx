import Router from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Button, ButtonInner, ButtonContainer, Container, Form, MessageBlock, RedText } from './payFormStyle';
import { InputBox } from '../inputBox/inputBox';
import ErrorIcon from '../../assets/img/error.svg';
import { maskValidate } from '../../utils/maskValidate';
import { Img } from '../img/img';
import { FormData, PayPageProps } from '../../types';
import { Loader } from '../loader/loader';
import { pay } from '../../api/pay';

export const PayForm = ({ operator }: PayPageProps) => {
  const { name, logo } = operator;
  const { register, handleSubmit, formState } = useForm<FormData>({ mode: 'onTouched' });
  const { errors, isSubmitting } = formState;
  const onSubmit = async (data: FormData) => {
    try {
      await pay(data);
      await redirectToIndexPage();
      toast.success('Платеж выполнен');
    } catch (e) {
      toast.error('Произошла ошибка при оплате');
    }
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    maskValidate(event);
  };
  const redirectToIndexPage = () => Router.push('/');
  const phoneValidate = (value: string): boolean => {
    const formattedValue = value.replace(/[^0-9]/gi, '');
    return formattedValue.length === 11;
  };

  const currencyValidate = (value: string): boolean => {
    const formattedValue = value.replace(/[^0-9]/gi, '');
    return +formattedValue <= 1000 && +formattedValue >= 1;
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <div>
          <Img logo={logo} width={'235px'} height={'50px'} alt={name} />
        </div>
        <InputBox
          type={'tel'}
          placeholder={'8 (999) 999-99-99'}
          label={'Номер'}
          {...register('phoneNumber', {
            required: true,
            onChange: handleInput,
            validate: phoneValidate,
          })}
          className={errors.phoneNumber?.type === 'validate' ? 'invalid' : ''}
        />
        <InputBox
          type={'tel'}
          placeholder={'1 000'}
          label={'Сумма'}
          endValue={'руб.'}
          {...register('amountPay', {
            required: true,
            onChange: handleInput,
            validate: currencyValidate,
          })}
          className={errors.amountPay?.type === 'validate' ? 'invalid' : ''}
        />
        {errors.amountPay && (
          <MessageBlock>
            <ErrorIcon />
            <RedText>Сумма платежа от 1 до 1000</RedText>
          </MessageBlock>
        )}
        <ButtonContainer>
          <Button type={'button'} onClick={() => Router.push('/')}>
            Выбрать другого оператора
          </Button>
          <ButtonInner>
            <Button type={'submit'} disabled={isSubmitting}>
              Оплатить
            </Button>
            {isSubmitting && <Loader />}
          </ButtonInner>
        </ButtonContainer>
      </Container>
    </Form>
  );
};
