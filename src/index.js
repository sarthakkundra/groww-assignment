import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import BankState from './context/Bank/BankState';

ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider resetCSS>
    <BankState>
      <App />
    </BankState>
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

