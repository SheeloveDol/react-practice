import Header from './components/header/Header.component';
import { CSSReset } from '@chakra-ui/core';
import { Box, ButtonGroup, Button, Spinner } from '@chakra-ui/core';


// creating a component
const greetings = 'Hello to you all';
const goodbye = 'Ok bye for now!'


function App() {
  return (

    <Box width='90%'  bg="blue" margin='1rem'>
      <Header text = "First Prop" another = "Yet another prop" greet = {greetings}  />
      <Button>Hello</Button>
      
    </Box>
  )
}

export default App;
