import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { Wrapper } from '../components/wrapper/wrapper';
import { Operator } from '../components/operator/operator';
import { IndexProps } from '../types';
import { DESKTOP } from '../constants/breakpoints';
import { AddOperator } from '../components/addOperator/addOperator';
import { getOperators } from '../api/getOperators';

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
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: ${DESKTOP}) {
    max-width: 80%;
    justify-content: center;
  } ;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  display: flex;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const operators = await getOperators();
    return { props: { operators } };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export const Index = ({ operators }: IndexProps) => {
  const { data } = useQuery('operators', getOperators, {
    initialData: operators,
  });
  return (
    <Wrapper>
      <Header>
        <Title>Выберите оператора:</Title>
      </Header>
      <Main>
        <Container>
          <List>
            {data.map((operator: { id: string; name: string; logo: string }) => (
              <ListItem key={operator.id}>
                <Operator name={operator.name} logo={operator.logo} />
              </ListItem>
            ))}
          </List>
          <AddOperator />
        </Container>
      </Main>
    </Wrapper>
  );
};

export default Index;
