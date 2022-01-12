import styled from "styled-components";
import {Link} from "react-router-dom";

export const A = styled(Link)`
  padding: 5px;
  border: 1px solid #D8E3EC;
  border-radius: 4px;
  background: #fff;

  &:hover, :focus {
    background: #b0cbf8;
  }`