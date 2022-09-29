import { Button, Center, Container, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthContextProvider/AuthContext'

export default function Signup() {
    let { data, setData } = useContext(AuthContext);
    let [click, setClick] = useState(false)

    let [obj, setObj] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    let handleChange = (e) => {

        let { value, name } = e.target

        setObj({ ...obj, [name]: value })
    }

    let handleClick = () => {
        setData(obj)
        setClick(true)
        alert('Signup Successful')
    }

    if(click == true){
        return <Navigate to='/login' />
    }

    let { firstName, lastName, email, password } = obj

    return (<Container maxW='60%'>
        <Center>
            <VStack spacing={6} marginBottom='100px'>
                <Text fontSize='47px'>Register</Text>
                <Text>Please fill in the fields below:</Text>

                <Input name='firstName' value={firstName} onChange={handleChange} h='50px' w='500px' placeholder='First name' type='text' />
                <Input name='lastName' value={lastName} onChange={handleChange} h='50px' w='500px' placeholder='Last name' type='text' />
                <Input name='email' value={email} onChange={handleChange} h='50px' w='500px' placeholder='E-mail' type='text' />
                <Input name='password' value={password} onChange={handleChange} h='50px' w='500px' placeholder='Password' type='password' />
                <Button onClick={handleClick} h='50px' w='500px' color='white' bg='red'>CREATE ACCOUNT</Button>
                <HStack>
                    <Text color='gray'>Already have an account?</Text>
                    <Link to='/login'><Text color='gray' textDecoration='underline'>Login</Text></Link>
                </HStack>
            </VStack>

        </Center>
    </Container>)
}
