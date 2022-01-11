import React, {useEffect, useState} from 'react';
import {Header, List, ListItem, Title} from "./indexStyle";
import Wrapper from "../../components/wrapper/wrapper";
import Operator from "../../components/operator/operator";
import {getOperators} from "../../api/getOperators";

const Index = () => {
    const [operators,setOperators] = useState([])
    const fetchOperators = async () => {
        try {
            const data = await getOperators();
            const {operators} = await data;
            setOperators(operators)
        } catch (e){
            console.error(e)
        }
    }
    useEffect(()=>{
        fetchOperators()
    },[])
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