import axios from 'axios';
import { GetServerSideProps } from 'next';
import Wrapper from '../../components/wrapper/wrapper';
import PayForm from '../../components/payForm/payForm';
import { PayPageProps } from '../../types';
import { API_OPERATORS_LIST, BASE_URL } from '../../constants/url';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const name = context.params?.name;
    const response = await axios.get(`${BASE_URL}${API_OPERATORS_LIST}/${name}`);
    const operator = await response.data;
    return { props: { operator } };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const PayPage = ({ operator }: PayPageProps) => (
  <Wrapper>
    <PayForm operator={operator} />
  </Wrapper>
);

export default PayPage;
