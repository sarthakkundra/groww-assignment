import { useEffect, useContext, useState, useCallback, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { debounce } from "lodash";
import BankContext from "./context/Bank/BankContext";
import axios from "axios";
import {
	Flex,
	Box,
	Select,
	HStack,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Pagination from "./Pagination";
import BankDetails from "./pages/BankDetails";
import "./App.css";

const App = () => {
	const bankContext = useContext(BankContext);
	const { addBanks, banks, loading, searchBanks, filtered, clearFilter } =
		bankContext;

	const [state, setState] = useState("MUMBAI");
	const [elements, setElements] = useState(10);

	const search = useRef("");

	const getData = useCallback(async () => {
		const data = await axios.get(
			`https://vast-shore-74260.herokuapp.com/banks?city=${state}`
		);
		addBanks(data.data);
		// caching API response
		window.localStorage.setItem(`${state}-banks`, JSON.stringify(data.data));
	}, [state, addBanks]);

	useEffect(() => {
		getData();
	}, [state]);

	const delayedSearch = debounce((data) => searchBanks(data), 300);

	const handleSearch = (e) => {
		if (search.current.value !== "") delayedSearch(e.target.value);
		else clearFilter();
	};

	if (loading) {
		return <h1>Loading....</h1>;
	} else {
		return (
			<>
				<Router>
					<Switch>
						<Route exact path='/details/:id'>
							<BankDetails />
						</Route>
						<Route path='/'>
							<HStack>
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
								<Box w='30%'>
									<Input
										ref={search}
										placeholder='search'
										onChange={handleSearch}
									/>
								</Box>
							</HStack>
							<Flex>
								<Box className='favourites'>
									<h1>Favourites</h1>
									<ul>
										<li>Bank 1....</li>
									</ul>
								</Box>
								<Box w='50%'>
									{banks.length > 0 && (
										<Pagination
											data={filtered != null ? filtered : banks}
											dataLimit={elements}
											pageLimit={5}
										/>
									)}
									<NumberInput size="sm" onChange={(e) => setElements(e)} defaultValue={10} min={5} max={20}>
										<NumberInputField />
										<NumberInputStepper>
											<NumberIncrementStepper />
											<NumberDecrementStepper />
										</NumberInputStepper>
									</NumberInput>
								</Box>
							</Flex>
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
};

export default App;
