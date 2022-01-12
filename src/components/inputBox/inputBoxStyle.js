import styled from 'styled-components'
import {MOBILE} from "../../constants/breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 15px;
  @media (min-width: ${MOBILE}) {
    align-items: center;
    flex-direction: row;
    column-gap: 30px;
  }`
export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  min-width: 15%;`
export const Input = styled.input`
  background: #fff;
  font-size: 1.4rem;
  padding: 12px 15px;
  border: 1px solid #D8E3EC;
  border-radius: 4px;
  width: 100%;
  transition: 0.3s;

  &:hover {
    border-color: #96AECD;
  }

  &:focus {
    border-color: #107EFF;
  }

  &:invalid {
    border-color: #ff1018;
  }`