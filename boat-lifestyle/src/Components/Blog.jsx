import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Blog = ({ image, title}) => {

    return (<Box >
        <Image borderRadius='10px' src={image} />
        <Text fontSize='20px' as='b' color='white'>{title}</Text>
    </Box>
    );
}

export default Blog;
