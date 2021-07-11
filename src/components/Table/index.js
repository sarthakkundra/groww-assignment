import React, { memo, useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import BankContext from "../../context/Bank/BankContext";
import { Table, Thead, Tbody, Tr, Th, Td, Text, Checkbox } from "@chakra-ui/react";

const Index = ({ banks }) => {
	const bankContext = useContext(BankContext);
	const { addDetails } = bankContext;

    const favourite = useRef(false);
    const handleFavourite = (e) => {
        console.log(favourite.current);
    }
	console.log(banks);
	return (
		<>
			<Table size='sm' variant='simple'>
				<Thead>
					<Tr>
						<Th>Banks</Th>
						<Th>IFSC</Th>
						<Th>Branch</Th>
						<Th>Bank ID</Th>
						<Th>Address</Th>
                        <Th>Mark as Favourite</Th>
					</Tr>
				</Thead>
				<Tbody>
					{banks.map((bank) => (
						<Tr key={uuidv4()}>
							<Td
								onClick={() => addDetails({name: bank.bank_name,
									ifsc: bank.ifsc,
									branch: bank.branch,
									id: bank.bank_id,
									address: bank.address})
								}>
								{" "}
								<Link to={`/details/${bank.ifsc}`}>
									{" "}
									<Text fontSize='13px'> {bank.bank_name} </Text>{" "}
								</Link>{" "}
							</Td>
							<Td>
								{" "}
								<Text fontSize='13px'> {bank.ifsc} </Text>{" "}
							</Td>
							<Td>
								{" "}
								<Text fontSize='13px'> {bank.branch} </Text>{" "}
							</Td>
							<Td>
								{" "}
								<Text fontSize='13px'> {bank.bank_id} </Text>
							</Td>
							<Td>
								{" "}
								<Text fontSize='13px'> {bank.address} </Text>{" "}
							</Td>
                            <Td onChange = {handleFavourite}>
                                <Checkbox ref={favourite} />
                            </Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</>
	);
};

export default memo(Index);
