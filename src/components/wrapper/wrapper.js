import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 1180px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;`

const Wrapper = ({children}) => {
    return (
        <Wrap>
            {children}
        </Wrap>
    );
};

export default Wrapper;