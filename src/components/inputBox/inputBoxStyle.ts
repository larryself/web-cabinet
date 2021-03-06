import styled from 'styled-components';
import { MOBILE } from '../../constants/breakpoints';
import { COLOR } from '../../constants/vars';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 15px;
  @media (min-width: ${MOBILE}) {
    align-items: center;
    flex-direction: row;
    column-gap: 30px;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  min-width: 15%;
`;
export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
  position: relative;

  &.invalid {
    box-shadow: 0 0 1px 2px rgb(255 0 0 / 70%);
  }
`;
export const Input = styled.input`
  background: ${COLOR.WHITE};
  font-size: 1.4rem;
  padding: ${(props) => (props.name === 'amountPay' ? '12px 40px 12px 15px' : '12px 15px')};
  border-width: 1px;
  border-style: solid;
  border-color: ${COLOR.BLUE_OUTLINE};
  border-radius: 4px;
  width: 100%;

  &:hover {
    border-color: ${COLOR.GREY_BLUE};
  }

  &:focus {
    border-color: ${COLOR.BLUE};
  }

  &:invalid {
    border-color: ${COLOR.RED};
  }
`;
export const EndValue = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;
