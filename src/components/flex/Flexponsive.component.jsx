import { Box, Flex, Text } from "@chakra-ui/core";

const Flexponsive = ({first, second, third}) => {
    return (
        <Flex direction={['column', 'column', 'row' ]}
        align='center'>
            <Box p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center'>
                <Text>{first}</Text>
            </Box>
            <Box p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center'>
                <Text>{second}</Text>
            </Box>
            <Box p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center'>
                <Text>{third}</Text>
            </Box>
            
        </Flex>
    )
}

export default Flexponsive