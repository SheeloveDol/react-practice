import { Box, Text } from "@chakra-ui/core";

const Balance = () => {
    return (
        <Box color="white" bg="tomato"  borderRadius="lg" border="1px" padding='0.5rem'  mb='0.5rem'>
           <Text fontSize="xl" >My balance</Text> 
           <Text fontSize="3xl">$921.48</Text> 
        </Box>
    )
}

export default Balance

// TODO: In order to not have to use multiple maxWidth on all of my other components I need to created a wrapper component that keeps the maxW set and put the Balance and Spending components in there.