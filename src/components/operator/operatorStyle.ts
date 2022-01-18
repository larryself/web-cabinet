import styled from 'styled-components';

const A = styled.a`
  padding: 5px;
  border: 1px solid #d8e3ec;
  border-radius: 4px;
  background: #fff;

  &:hover {
    border-color: #96aecd;
  }

  &:focus {
    border-color: #107eff;
  }

  &:hover,
  :focus {
    background: #e8f3ff;
  }
`;

export default A;
