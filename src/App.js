import { useEffect, useContext, useState, useCallback } from "react";
import BankContext from "./context/Bank/BankContext";
import axios from "axios";
import { Flex, Box, Select } from "@chakra-ui/react";
import Table from "./components/Table";
import "./App.css";

const App = () => {
	const bankContext = useContext(BankContext);
	const { addBanks, banks, loading } = bankContext;
	const [state, setState] = useState("MUMBAI");

	const getData = useCallback(async () => {
		const data = await axios.get(
			`https://vast-shore-74260.herokuapp.com/banks?city=${state}`
		);
		addBanks(data.data);
	}, [state, addBanks]);

	useEffect(() => {
		getData();
	}, [state]);

	if (loading) {
		return <h1>Loading....</h1>;
	} else {
		return (
			<>
				<Box w='20%'>
					<Select
						onChange={(e) => setState(e.target.value)}
						placeholder='Select option'>
						<option value='MUMBAI' defaultValue>
							Mumbai
						</option>
						<option value='DELHI'>Delhi</option>
						<option value='LUCKNOW'>Lucknow</option>
						<option value='BANGALORE'>Bangalore</option>
						<option value='HYDERABAD'>Hyderabad</option>
					</Select>
				</Box>
				<Flex>
					<Box className='favourites'>
						<h1>Favourites</h1>
						<ul>
							<li>Bank 1....</li>
						</ul>
					</Box>
					<Box w='50%'>
						{banks.length > 0 ? <Table banks={banks} /> : <h1>Loading</h1>}
					</Box>
				</Flex>
			</>
		);
	}
};

export default App;
