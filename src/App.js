import Header from './components/header/Header.component';
import { CSSReset } from '@chakra-ui/core';
import { Box, ButtonGroup, Button, Spinner, Flex } from '@chakra-ui/core';
import Balance from './components/balance/Balance.component';
import Flexponsive from './components/flex/Flexponsive.component';

// creating a component
const greetings = 'Hello to you all';
const goodbye = 'Ok bye for now!'


function App() {
  return (

    
      <Box  bg="orange.100"  mx="auto" w='100%' py='5rem' h='100vh' >
        <Box border="1px" bg="blue.300" borderColor="black" maxW='30rem' p='0.1rem' mx='auto' >
          <Balance />
          <Flexponsive first="First Box" second="Second Box" third="Third Box" />
        </Box>
      </Box>

  )
}

export default App;
