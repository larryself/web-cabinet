import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #d8e3ec;
  border-radius: 4px;
  background: #fff;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;
export const ButtonInner = styled.div`
  position: relative;
`;
export const Button = styled.button`
  padding: 12px 15px;
  font-weight: 500;
  background: #107eff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;

  &:focus,
  &:hover {
    background: #308fff;
  }

  &:active {
    background: #0067df;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
export const MessageBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;
export const RedText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ff603e;
`;
