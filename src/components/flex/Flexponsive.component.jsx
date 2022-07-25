import { useState } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/core";

import Card from "../card/Card.component";

const Flexponsive = ({data}) => {
    
    return (
        <Flex direction={['column', 'column', 'row' ]}
        align='center'>
           {
                data.map(item => <Card key={item.id} p='1rem' m='1rem' backgroundColor='gray.200' w='100%' textAlign='center' >{item.name}</Card>
                    )
           }
           <Card>Hello, I am a card too</Card>

            <Button >Click Me!</Button>
        </Flex>
    )
}

export default Flexponsive

