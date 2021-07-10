import { useEffect, useContext } from "react";
import BankContext from './context/Bank/BankContext';
import axios from "axios";
import { Flex, Box } from "@chakra-ui/react";
import Table from "./components/Table";
import "./App.css";

const App = () => {

  const bankContext = useContext(BankContext);
  const { addBanks, banks } = bankContext;

	const getData = async () => {
		const data = await axios.get(
			`https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`
		);
		// console.log(data.data);
    addBanks(data.data);
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<Flex>
				<Box className="favourites">
        <h1>Favourites</h1>
					<ul>
            <li>Bank 1....</li>
          </ul>
				</Box>
				<Box w="50%">
						{banks.length > 0 && <Table banks={banks}/>}
				</Box>
			</Flex>
		</>
	);
};

export default App;
