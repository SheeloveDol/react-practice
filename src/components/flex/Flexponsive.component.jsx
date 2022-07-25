import { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/core";



const Flexponsive = ({first, second, third}) => {
    const [label, setLabel] = useState("I am first")

    const handleClick = () => {
        setLabel("I have been clicked")
    }

    return (
        <Flex direction={['column', 'column', 'row' ]}
        align='center'>
            <Box p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center'>
                <Text>{label}</Text>
            </Box>
            <Box p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center'>
                <Text>{second}</Text>
            </Box>
            <Box p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center'>
                <Text>{third}</Text>
            </Box>

            <Button onClick={handleClick}>Click Me!</Button>
        </Flex>
    )
}

export default Flexponsive