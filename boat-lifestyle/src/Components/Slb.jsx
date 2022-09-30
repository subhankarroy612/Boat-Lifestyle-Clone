import { Box, Button, Center, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CartContext } from '../CartContextProvider/CartContext';

const Slb = ({ image, title, rating, reviews, dprice, price, save }) => {

    let { cart, setCart } = useContext(CartContext)

    let handleClick = () => {
        document.querySelector(".parent").style.right = '0';
        setCart({ image: image, title: title, dprice: dprice, price: price })
    }


    return (<Box borderRadius='10px' boxSize='md' bg='#E3E3E3'>
        <Center>
            <Image src={image} h="240px" />
        </Center>
        <VStack borderRadius='5px' alignItems='start' m='10px' bg='white' p='5px'>
            <Text as='b' >{title}</Text>
            <Text>{rating} | {reviews} reviews</Text>
            <Divider />
            <HStack>
                <Text as='b' color='red'>{dprice}</Text>
                <Text as='s'>{price}</Text>
            </HStack>
            <Text>You Save: {save}</Text>
            <Button onClick={()=>handleClick()} w='full' bg='orange' color='white' >ADD TO CART</Button>
        </VStack>
    </Box>
    );
}

export default Slb;
