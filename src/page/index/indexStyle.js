import styled from "styled-components";
import {DEKSTOP} from "../../constants/breakpoints";

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;`
export const Title = styled.h1`
  font-size: 2.0rem;
  line-height: 2.3rem;`
export const Main = styled.main`
  display: flex;
  justify-content: center;`
export const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${DEKSTOP}) {
    max-width: 80%;
    justify-content: center;
  }`
export const ListItem = styled.li`
  display: flex;`