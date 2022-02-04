import Link from 'next/link';
import Plus from '../../assets/img/plus.svg';
import { A, Container } from './addOperatorStyle';

export const AddOperator = () => (
  <Container>
    <Link href={'/add'} passHref>
      <A>
        <Plus />
        <span>Добавить оператора</span>
      </A>
    </Link>
  </Container>
);
