import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #D8E3EC;
  border-radius: 4px;
  background: #fff;`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;`
export const Button = styled.button`
  align-self: flex-end;
  padding: 12px 15px;
  font-weight: 500;
  background: #107EFF;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;

  &:focus, &:hover {
    background: #308FFF;
  }

  &:active {
    background: #0067DF;
  }

  &:disabled {
    background: red;
    cursor: default;
    opacity: 0.5;
  }`