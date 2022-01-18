import Wrapper from "../../components/wrapper/wrapper";
import PayForm from "../../components/payForm/payForm";
import { PayPageProps } from "../../types";


const PayPage = ({ operator }: PayPageProps) => (
  <Wrapper>
    <PayForm operator={operator} />
  </Wrapper>
);

export default PayPage;
