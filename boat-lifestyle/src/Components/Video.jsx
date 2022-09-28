import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Video = ({ id, url, title, dprice, price }) => {

    return (<VStack key={id} borderRadius="10px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <video width="250" autoPlay loop muted>
            <source src={url} type="video/mp4" />
        </video>
        <Text as='b' >{title}</Text>
        <HStack p='20px'>
            <Text as='b' color='red'>{dprice}</Text>
            <Text as='s'>{price}</Text>
        </HStack>
    </VStack>
    );
}

export default Video;
