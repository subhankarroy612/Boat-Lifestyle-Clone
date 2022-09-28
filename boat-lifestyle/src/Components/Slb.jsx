import { Box, Button, Center, Divider, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Slb = ({ id, image, title, rating, reviews, dprice, price, save }) => {
    return (<Box borderRadius='10px' key={id} boxSize='md' bg='#E3E3E3'>
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
            <Button w='full' bg='orange' color='white' >ADD TO CART</Button>
        </VStack>
    </Box>
    );
}

export default Slb;
