import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Radio,
    RadioGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React from 'react';
import { useRouter } from 'next/router';
import { Header } from '../components/Header/index';
import auth from '../config/firebaseconfig';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import userModel from "../Model/userModel";
var erro = "";

export default function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = React.useState('1')
    const router = useRouter();

    function addUser(){
        let UserModel = userModel();
        UserModel.email = document.getElementById("email").value;
        UserModel.password = document.getElementById("password").value;

        createUserWithEmailAndPassword(auth, UserModel.email, UserModel.password)
        .then((userCredential) => {
            const user = userCredential.user;
            user.displayName = document.getElementById("name").value
            router.push('/home-page');
            console.log(user.uid);
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            if(errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
                document.getElementById("testeErro").innerHTML = "Este E-mail já está sendo usado!!";
                console.log(erro);
            }
            if(errorMessage == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                document.getElementById("testeErro").innerHTML = "É necessário que a senha tenha pelo menos 6 caracteres";
            }
            console.log(erro);
            //router.push('/home-page');
            // ..
        });
    }

    return (
        <>
        <Header>
        </Header>
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={"backgroundBlack.700"}
            bgPosition={'center'}
            bgRepeat="no-repeat"
        >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} color={'white'}>
                            Cadastro
                        </Heading>
                        {/* <Text fontSize={'lg'} color={'gray.600'}>
        to enjoy all of our cool features ✌️
    </Text> */}
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('gray.800')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>


                            <FormControl id="firstName" isRequired>
                                <FormLabel color="white">Nome</FormLabel>
                                <Input type="text" id="name" color="white"/>
                            </FormControl>


                            <FormControl id="email" isRequired>
                                <FormLabel color="white">Email</FormLabel>
                                <Input type="email" id="email" color="white"/>
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel color="white">Senha</FormLabel>
                                <InputGroup>
                                    <Input color="white" type={showPassword ? 'text' : 'password'} id="password"/>
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                            {showPassword ? <ViewIcon color="white"/> : <ViewOffIcon color="white"/>}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>


                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'yellowPrimary.800'}
                                    color={'white'}
                                    onClick={() => addUser()}
                                    onPress={() => {
                                        addUser()
                                    }}
                                    _hover={{
                                        bg: 'yellowPrimary.600',
                                        
                                    }}>
                                    Cadastrar
                                </Button>
                                <h5 style={{color: 'red'}} id='testeErro' ></h5>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'} color="white">
                                    Já tem conta?<Link color={'yellowPrimary.500'} onClick={() => router.push('/login')}>Login</Link>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex></>
    );
}