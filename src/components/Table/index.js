import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Text
  } from "@chakra-ui/react"

const index = ({ banks }) => {

    console.log(banks);
    return (
       <>
       <Table size="sm" variant="simple">
       <Thead>
           <Tr>
               <Th>Banks</Th>
               <Th>IFSC</Th>
               <Th>Branch</Th>
               <Th>Bank ID</Th>
               <Th>Address</Th>
           </Tr>
       </Thead>
       {banks.map((bank) => (
           <Tr key={uuidv4()}>
               <Td> <Text fontSize="13px"> { bank.bank_name } </Text> </Td>
               <Td> <Text fontSize="13px"> { bank.ifsc } </Text> </Td>
               <Td> <Text fontSize="13px"> { bank.branch } </Text> </Td>
               <Td> <Text fontSize="13px"> { bank.bank_id } </Text></Td>
               <Td> <Text fontSize="13px"> { bank.address } </Text> </Td>
           </Tr>
       ))}
       </Table>
       </>
    )
}

export default index
