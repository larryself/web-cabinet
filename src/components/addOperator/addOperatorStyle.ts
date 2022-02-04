import styled from 'styled-components';
import { COLOR } from '../../constants/vars';
import { TABLE } from '../../constants/breakpoints';

export const A = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
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
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  @media (max-width: ${TABLE}) {
    justify-content: center;
  }
`;
