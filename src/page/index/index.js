import React from 'react';
import {Header} from "./indexStyle";
import Wrapper from "../../components/wrapper/wrapper";
import Operator from "../../components/operator/operator";
const operators = [{id: 1, name: 'mts', logo: 'assets/img/mts.svg'},{id: 2, name: 'megafon', logo: 'assets/img/megafon.svg'},{id: 3, name: 'beeline', logo: 'assets/img/beeline.svg'}]
const Index = () => {
    return (
        <Wrapper>
            <Header>
                <h1>Выберете оператора:</h1>
            </Header>
            <main>
                <ul>
                    {operators.map((operator)=> (
                        <li key={operator.id}>
                           <Operator name={operator.name} logo={operator.logo}/>
                        </li>
                    ))}
                </ul>
            </main>
        </Wrapper>
    );
};

export default Index;