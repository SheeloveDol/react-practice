import { Box, Text } from "@chakra-ui/core"

const Header = ({inCase, text, another, greet}) => {
    return (
        <Box bg='tomato' w={[
            "100%",
            "75%",
            "50%"
        ]}>


            <div className="container">
                <Text fontSize="6xl" >{text}</Text>
                <Text fontSize="5xl" >{another}</Text>
                <Text fontSize="4xl" >{inCase}</Text>
                <Text fontSize="xl" >{greet}</Text>
            </div>
        </Box>
    )
}

Header.defaultProps = {
    inCase: 'This is a default prop'
}
export default Header
