import { Box, Button, Divider, Flex, HStack, Image, Input, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import social from '../logo/social.png'
export default function Footer() {
  return (<div >
    <Box bg='red' w='full' textAlign='center' p='20px' marginTop="40px">
      <Text margin='auto' w='60%' color='white'>India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</Text>
    </Box>
    <Flex p='50px' gap={10}>
      <VStack alignItems='start' spacing={5}>
        <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672' alt='Logo' />
        <Text color='gray'>Subscribe to email alerts. We promise not to spam your inbox.</Text>
        <HStack spacing='0px' border='1px solid red' p='6px' borderRadius='6px'>
          <Input color='gray' placeholder='Email Address*' w='200px' border='none' />
          <Button bg='red' color='white' w='200px'>SUBSCRIBE</Button>
        </HStack>
      </VStack>

      <VStack fontSize='14px' alignItems='start' >
        <Text as='b'>SHOP</Text>
        <HStack gap={7}>
          <VStack alignItems='start' color='gray'>
            <Text>True Wireless Earbuds</Text>
            <Text>Wired Headphones</Text>
            <Text>Home Audio</Text>
            <Text>Smart Watches</Text>
            <Text>Misfit</Text>
            <Text>Rock In India</Text>
          </VStack>
          <Box border='1px solid gray' h='full'></Box>
          <VStack alignItems='start' color='gray'>
            <Text>Wireless Headphones</Text>
            <Text>Wireless Speakers</Text>
            <Text>Mobile Accessories</Text>
            <Text>TRebel</Text>
            <Text>Gift Card</Text>
            <Text>Earn Rs.100</Text>
          </VStack>
          <Box border='1px solid gray' h='full'></Box>
        </HStack>
      </VStack>

      <VStack fontSize='14px' alignItems='start' >
        <Text as='b'>HELP</Text>
        <HStack gap={7}>
          <VStack alignItems='start' color='gray'>
            <Text>Track Your Order</Text>
            <Text>Return Policy</Text>
            <Text>Bulk Orders</Text>
            <Text>Why Buy Direct</Text>
          </VStack>
          <Box border='1px solid gray' h='full'></Box>
          <VStack alignItems='start' color='gray'>
            <Text>Warranty & Support</Text>
            <Text>Service Centers</Text>
            <Text>FAQs</Text>
          </VStack>
        </HStack>
      </VStack>

      <VStack fontSize='14px' alignItems='start' >
        <Text as='b'>COMPANY</Text>
        <HStack gap={7}>
          <Box border='1px solid gray' h='full'></Box>
          <VStack alignItems='start' color='gray'>
            <Text>About boAt</Text>
            <Text>News</Text>
            <Text>Read Our Blog</Text>
            <Text>Careers</Text>
            <Text>Security</Text>
            <Text>Terms of Service</Text>
            <Text>Privacy Policy</Text>
            <Text>Investor Relations</Text>
            <Text>Social Responsibility</Text>
            <Text>Warranty Policy</Text>
          </VStack>

        </HStack>
      </VStack>
    </Flex>
    <Divider />
    <Image src={social} />
    <Divider />

    <Flex p="20px">
      <Box>
        <Text as='b'>Download the App</Text>
        <HStack>
          <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293' />
          <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293' />
        </HStack>
      </Box>
      <Spacer />
      <Box>
        <Text as='b'>We Accept</Text>
        <HStack>
          <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054' />
        </HStack>
      </Box>
    </Flex>
    <Divider />

    <Text paddingTop='10px' paddingBottom='50px'>© 2022 Imagine Marketing Limited. All Rights Reserved.</Text>




  </div>
  )
}
