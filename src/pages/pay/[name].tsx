import axios from 'axios';
import { useQuery } from 'react-query';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { Wrapper } from '../../components/wrapper/wrapper';
import { PayForm } from '../../components/payForm/payForm';
import { PayPageProps } from '../../types';
import { API_OPERATORS_LIST, BASE_URL } from '../../constants/url';
import { getOperator } from '../../api/getOperator';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const name = context.params?.name as string;
    const operator = await getOperator(name);
    return { props: { operator } };
  } catch (e) {
    return {
      props: {},
    };
  }
};

const PayPage = ({ operator }: PayPageProps) => {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery(
    ['operator', operator],
    () => axios.get(`${BASE_URL}${API_OPERATORS_LIST}/${router.query.name}`).then((r) => r.data),
    {
      initialData: operator,
      retry: 0,
      onError: () => {
        toast.error('Оператор с таким именем не найден');
        router.replace('/404');
      },
    },
  );
  if (isLoading || isError) return null;
  return (
    <Wrapper>
      <PayForm operator={data} />
    </Wrapper>
  );
};

export default PayPage;
