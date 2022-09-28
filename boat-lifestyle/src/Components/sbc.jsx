import { Box, Image, Text } from "@chakra-ui/react";

const Sbc = ({ id, title, image}) => {


    return (<Box height='150px' id={id}>
        <Image src={image} alt='products' />
        <Text as="b" fontSize='12px' >{title}</Text>
    </Box>
    );
}

export default Sbc;
