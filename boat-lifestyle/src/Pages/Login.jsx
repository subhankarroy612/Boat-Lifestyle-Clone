import { Button, Center, Container, HStack, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContextProvider/AuthContext'

export default function Login() {

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [auth, toggleAuth] = useState(false);

    let { data } = useContext(AuthContext);

    let handleClick = () => {

        if (data.email == email && data.password == password) {
            console.log(data);
            console.log(email, password);
            toggleAuth(true)
            alert('Logged in Successfully')
        } else {
            alert('Wrong Username or Password')
        }
    }

    if (auth === true) {
        return <Navigate to='/' />
    }





    return (<Container maxW='60%'>
        <Center>
            <VStack spacing={6} marginBottom='100px'>
                <Text fontSize='47px'>Login</Text>
                <Text>Please enter your e-mail and password:</Text>

                <HStack paddingTop='40px'>
                    <Image w='40px' src='https://cdn-icons-png.flaticon.com/512/145/145802.png' />
                    <Image w='40px' src='https://cdn-icons-png.flaticon.com/512/281/281764.png' />
                </HStack>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} h='50px' w='500px' placeholder='E-mail' type='text' />
                <Input value={password} onChange={(e) => setPassword(e.target.value)} h='50px' w='500px' placeholder='Password' type='password' />
                <Button onClick={handleClick} h='50px' w='500px' color='white' bg='red'>LOGIN</Button>
                <HStack>
                    <Text color='gray'>New customer? </Text>
                    <Link to='/signup'><Text color='gray' textDecoration='underline'>Create an account</Text> </Link>
                </HStack>
            </VStack>

        </Center>
    </Container>)
}
