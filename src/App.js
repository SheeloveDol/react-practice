import Header from './components/header/Header.component';
import { CSSReset } from '@chakra-ui/core';
import { Box, ButtonGroup, Button, Spinner, Flex } from '@chakra-ui/core';
import Balance from './components/balance/Balance.component';


// creating a component
const greetings = 'Hello to you all';
const goodbye = 'Ok bye for now!'


function App() {
  return (

    
      <Box  bg="orange.100"  mx="auto" w='100%' >
        <Box border="1px" bg="blue.300" borderColor="black" maxW='30rem' p='0.1rem' mx='auto'>
          <Balance />
          <Balance />
          <Balance />
        </Box>
      </Box>

  )
}

export default App;
