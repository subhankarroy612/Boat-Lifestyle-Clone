import { Box, Button, Center, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CartContext } from '../CartContextProvider/CartContext';

const Nl = ({ image, title, dprice, price, save }) => {

    let { cart, setCart } = useContext(CartContext)

    let handleClick = () => {
        document.querySelector(".parent").style.right = '0';
        setCart({ image: image, title: title, dprice: dprice, price: price })
    }

    return (<Box borderRadius='10px' boxSize='md' bg='#E3E3E3'>
        <Center>
            <Image src={image} h="240px" />
        </Center>
        <VStack spacing={4} borderRadius='5px' alignItems='start' m='10px' bg='white' p='5px'>
            <Text as='b' >{title}</Text>
            <Divider />
            <HStack>
                <Text as='b' color='red'>{dprice}</Text>
                <Text as='s'>{price}</Text>
            </HStack>
            <Text>You Save: {save}</Text>
            <Button onClick={()=>handleClick()} w='full' bg='tomato' color='white' >ADD TO CART</Button>
        </VStack>
    </Box>
    );
}

export default Nl;