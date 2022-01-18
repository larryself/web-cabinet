import Link from 'next/link';
import Img from '../img/img';
import A from './operatorStyle';
import { OperatorProps } from '../../types';

const Operator = ({ logo, name }: OperatorProps) => (
  <Link href={`/pay/${name}`} passHref>
    <A>
      <Img logo={logo} width={'235px'} height={'50px'} alt={name} />
    </A>
  </Link>
);

export default Operator;
