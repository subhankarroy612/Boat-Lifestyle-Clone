import { Box, Button, Flex, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (<Flex h='600px' p='50px'>
      <VStack alignItems='start' spacing={5}>
        <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672' alt='Logo'/>
        <Text color='gray'>Subscribe to email alerts. We promise not to spam your inbox.</Text>
        <HStack spacing='0px' border='1px solid red' p='6px' borderRadius='6px'>
            <Input w='200px' border='none' />
            <Button bg='red' color='white' w='200px'>SUBSCRIBE</Button>
        </HStack>
      </VStack>

      

  </Flex>
  )
}
