import { Box, Container, Divider, Flex, HStack, Image, Input, List, ListItem, Spacer, Text } from "@chakra-ui/react";

export default function Navbar() {
    return <Container maxW="100%" id="navbar" bg="white" >
        <Flex p="20px">
            <Box>
                <Image src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5_small.png?v=1661838672' alt='Logo' />
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
            <Flex gap={10}>
                <Input type="text" />
                <Image w='20px' h='25px' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
                <Image w='20px' h='25px' src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" />
            </Flex>
        </Flex>
        <Divider />
    </Container>

}



