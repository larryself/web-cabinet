import React from 'react';
import {Header, List, ListItem, Title} from "./indexStyle";
import Wrapper from "../../components/wrapper/wrapper";
import Operator from "../../components/operator/operator";
const operators = [{id: 1, name: 'mts', logo: 'img/mts.svg'},{id: 2, name: 'megafon', logo: 'img/megafon.svg'},{id: 3, name: 'beeline', logo: 'img/beeline.svg'}]
const Index = () => {
    return (
        <Wrapper>
            <Header>
                <Title>Выберете оператора:</Title>
            </Header>
            <main>
                <List>
                    {operators.map((operator)=> (
                        <ListItem key={operator.id}>
                           <Operator name={operator.name} logo={operator.logo}/>
                        </ListItem>
                    ))}
                </List>
            </main>
        </Wrapper>
    );
};

export default Index;