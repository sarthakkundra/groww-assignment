import React, { useContext } from 'react';
import BankContext from '../../context/Bank/BankContext';
import { Container, Heading, Text } from '@chakra-ui/react';

const Index = () => {

    const bankContext = useContext(BankContext);
    const { bankDetails } = bankContext;
    const { name, ifsc, branch, id, address } = bankDetails;

    return (
        <>
        <Heading>Bank Deatils</Heading>
            <Container>
                <Heading>{name}</Heading>
                <Text>{address}</Text>
                <Text>{branch}</Text>
                <Text>{ifsc}</Text>
                <Text>{id}</Text>
            </Container>
        </>
    )
}

export default Index
