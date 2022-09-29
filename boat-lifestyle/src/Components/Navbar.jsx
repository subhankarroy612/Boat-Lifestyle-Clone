import { Box, Button, Container, Divider, Flex, HStack, Image, Input, List, ListItem, Spacer, Text, VStack } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

export default function Navbar() {
    return <Container maxW="100%" id="navbar" bg="white" >
        <Flex p="20px">
            <Box>
                <Link to='/'>
                    <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672' alt='Logo' />
                </Link>
            </Box>

            <Box paddingLeft='100px'>
                <Flex p="2" gap={10}>
                    <Text fontSize='18px'>CATEGORIES</Text>
                    <Text fontSize='18px'>SAIL WITH BOAT</Text>
                    <Text fontSize='18px'>OFFER ZONE</Text>
                    <Text fontSize='18px'>MORE</Text>
                </Flex>
            </Box>

            <Spacer />
            <Flex gap={3} justifyContent='center' alignItems='center'>
                <Input bg='#f2f2f2' w='300px' placeholder="Search..." borderRadius='50px' type="text" />
                <Link to='/login'>
                    <Image w='20px' h='20px' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
                </Link>

                {/* <VStack>
                <Image onClick={()=><Link to='/login'></Link>} id="h" w='20px' h='25px' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
                    <Box bg='white' id="hide" p='10px' w='200px' border='1px solid black'>
                        <Text as='b' color='red'>Hi boAthead!</Text>
                        <Button bg='red' color='white' w='full'>Login</Button>
                    </Box>
                </VStack> */}
                <Image w='20px' h='20px' src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" />
            </Flex>
        </Flex>
        <Divider />
    </Container>

}



