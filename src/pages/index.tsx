import axios from 'axios';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import Wrapper from '../components/wrapper/wrapper';
import Operator from '../components/operator/operator';
import { IndexProps } from '../types';
import { API_OPERATORS_LIST, BASE_URL } from '../constants/url';
import { DESKTOP } from '../constants/breakpoints';

const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Title = styled.h1`
  font-size: 2rem;
  line-height: 2.3rem;
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${DESKTOP}) {
    max-width: 80%;
    justify-content: center;
  }
`;
const ListItem = styled.li`
  display: flex;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${API_OPERATORS_LIST}`);
    const operators = await response.data;
    return { props: { operators } };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const Index = ({ operators }: IndexProps) => (
  <Wrapper>
    <Header>
      <Title>Выберите оператора:</Title>
    </Header>
    <Main>
      <List>
        {operators.map((operator) => (
          <ListItem key={operator.id}>
            <Operator name={operator.name} logo={operator.logo} />
          </ListItem>
        ))}
      </List>
    </Main>
  </Wrapper>
);

export default Index;
