import { Box, Text } from "@chakra-ui/core"

const Card = ({children}) => {
    return (
        <Box p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center'>
            <Text>{children}</Text>
        </Box>
    )
}

export default Card