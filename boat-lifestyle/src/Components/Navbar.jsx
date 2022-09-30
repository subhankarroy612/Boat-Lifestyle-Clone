import { Box, Button, Center, Container, Divider, Flex, HStack, Image, Input, List, ListItem, Spacer, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../CartContextProvider/CartContext";

export default function Navbar() {

    let { cart } = useContext(CartContext)

    let displaySidebar = (pos) => {
        if (pos === 'open') {
            document.querySelector(".parent").style.right = '0';
            document.querySelector("body").style.overflowY = 'hidden';
        } else {
            document.querySelector(".parent").style.right = '-25%';
            document.querySelector("body").style.overflowY = 'scroll';
        }
    }

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
                    <Image cursor='pointer' w='20px' h='20px' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
                </Link>

                <button bg='transparent'><Image onClick={() => displaySidebar('open')} w='20px' h='20px' src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" /></button>
            </Flex>
        </Flex>
        <Divider />
        <Box className="parent" w='25%'>
            <Flex alignItems='center' w='full' bg='red'>
                <Text paddingLeft={4} fontSize={20} color='white'>Your Cart(Cart)</Text>
                <Spacer />
                <Button color='white' bg='red' onClick={() => displaySidebar('close')} fontSize={18}>X</Button>
            </Flex>
            <Text bg='black' color='white' p={1} fontSize={14}>Free Shipping sitewide | Cash On Delivery available for order value upto ₹3000</Text>
             

            { cart.image && <div>
                <Center>
                    <Flex marginTop={20}>
                        <Image w='150px' src={cart.image} />
                        <VStack>
                            <Text as='b'>{cart.title}</Text>
                            <Flex>
                                <Text color='red' as='b'>{cart.dprice} |</Text>
                                <Text as='s' paddingLeft={5}>{cart.price}</Text>
                            </Flex>
                        </VStack>
                    </Flex>
                </Center>
                <Box p={4}>
                    <Button marginTop={20} bg='red' color='white' w='full'>ADD TO CART</Button>
                </Box>
            </div>}
        </Box>

    </Container >

}



