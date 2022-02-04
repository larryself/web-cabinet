import styled from 'styled-components';
import { COLOR } from '../../constants/vars';

export const A = styled.a`
  padding: 5px;
  border: 1px solid ${COLOR.BLUE_OUTLINE};
  border-radius: 4px;
  background: ${COLOR.WHITE};

  &:hover {
    border-color: ${COLOR.GREY_BLUE};
  }

  &:focus {
    border-color: ${COLOR.BLUE};
  }

  &:hover,
  :focus {
    background: ${COLOR.PALE_BLUE};
  }
`;
