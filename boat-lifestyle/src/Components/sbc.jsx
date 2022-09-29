import { Box, Image, Text } from "@chakra-ui/react";

const Sbc = ({ title, image}) => {


    return (<Box height='150px'>
        <Image src={image} alt='products' />
        <Text as="b" fontSize='12px' >{title}</Text>
    </Box>
    );
}

export default Sbc;
