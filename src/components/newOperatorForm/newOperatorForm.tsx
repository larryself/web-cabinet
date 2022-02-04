import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Router from 'next/router';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { FormData } from '../../types';
import { InputBox } from '../inputBox/inputBox';
import { Form, Container, Button, ButtonInner, ButtonContainer } from './newOperatorFormStyle';
import { Loader } from '../loader/loader';
import { createOperator as crtOperator } from '../../api/createOperator';

const useNewOperator = () => {
  const queryClient = useQueryClient();
  return useMutation('createOperator', (data: FormData) => crtOperator(data), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('operators');
      toast.success('Оператор добавлен');
      await Router.push('/');
    },
    onError: () => {
      toast.error('Произошла ошибка при добавлении оператора');
    },
  });
};
export const NewOperatorForm = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({ mode: 'onTouched' });
  const { errors, isSubmitting } = formState;
  const { mutateAsync: createOperator } = useNewOperator();
  const onSubmit = async (data: FormData) => {
    await createOperator(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <h2>Добавить оператора</h2>
        <InputBox
          type={'text'}
          placeholder={'Вымпелком'}
          label={'Название оператора'}
          {...register('operatorName', { required: true, validate: (e) => e.length >= 3 })}
          className={errors.operatorName?.type === 'validate' ? 'invalid' : ''}
        />
        <InputBox
          type={'text'}
          placeholder={'Логотип оператора'}
          label={'Логотип оператора'}
          {...register('logo', { required: true, validate: (e) => e.length >= 3 })}
          className={errors.logo?.type === 'validate' ? 'invalid' : ''}
        />
        <ButtonContainer>
          <Button type={'button'} onClick={() => Router.push('/')}>
            Вернуться назад
          </Button>
          <ButtonInner>
            <Button type={'submit'} disabled={isSubmitting}>
              Создать оператора
            </Button>
            {isSubmitting && <Loader />}
          </ButtonInner>
        </ButtonContainer>
      </Container>
    </Form>
  );
};
