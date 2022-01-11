import React, {useContext, useEffect, useState} from 'react';
import {Header, List, ListItem, Title, Main} from "./indexStyle";
import Wrapper from "../../components/wrapper/wrapper";
import Operator from "../../components/operator/operator";
import {getOperators} from "../../api/getOperators";
import GlobalContext from "../../context/context";
import {changeOperator} from "../../action/action";

const Index = () => {
    const {GlobalDispatch} = useContext(GlobalContext);
    const [operators, setOperators] = useState([])
    const fetchOperators = async () => {
        try {
            const data = await getOperators();
            const {operators} = await data;
            setOperators(operators)
        } catch (e) {
            console.error(e)
        }
    }
    const openForm = (id) => {
        const selectedOperator = operators.find((operator) => operator.id === id)
        GlobalDispatch(changeOperator(selectedOperator))
    }
    useEffect(() => {
        fetchOperators()
    }, [])
    return (
        <Wrapper>
            <Header>
                <Title>Выберете оператора:</Title>
            </Header>
            <Main>
                <List>
                    {operators.map((operator) => (
                        <ListItem key={operator.id}>
                            <Operator name={operator.name} logo={operator.logo} onClick={() => openForm(operator.id)}/>
                        </ListItem>
                    ))}
                </List>
            </Main>
        </Wrapper>
    );
};

export default Index;