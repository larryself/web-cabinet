import styled from 'styled-components';
import { COLOR } from '../../constants/vars';

export const Form = styled.form`
  margin-top: 50px;
  padding: 20px;
  border: 1px solid ${COLOR.BLUE_OUTLINE};
  border-radius: 4px;
  background: ${COLOR.WHITE};
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
  background: ${COLOR.BLUE};
  color: ${COLOR.WHITE};
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;

  &:focus,
  &:hover {
    background: ${COLOR.LIGHT_BLUE};
  }

  &:active {
    background: ${COLOR.DARK_BLUE};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;
