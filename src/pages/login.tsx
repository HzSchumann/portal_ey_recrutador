import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Header } from '../components/Header/index';
import auth from '../config/firebaseconfig';
import userModel from "../Model/userModel";
import { signInWithEmailAndPassword } from "firebase/auth";
export var idUser;

export default function Login() {

    var erro;
var idUser;
var nomeUser;
    function addUser(){
        let UserModel = userModel();
        UserModel.email = document.getElementById("email").value;
        UserModel.password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, UserModel.email, UserModel.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            router.push('/home-page');
            idUser = user.id;
            nomeUser = user.displayName;
            preencherDados(user.id);
            console.log(user.uid);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorMessage != null){
                erro = 'Teste Erro';
                document.getElementById("testeErro").innerHTML = "Usuário não existente!";
                console.log(erro);
            }
            //router.push('/home-page');
            // ..
          });
    }

    const router = useRouter();

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
                        <Heading fontSize={'4xl'} color={'white'}>Login</Heading>
                        {/* <Text fontSize={'lg'} color={'white'}>
        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
    </Text> */}
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={"backgroundBlack.700"}
                        boxShadow={'lg'}
                        borderWidth="1px"
                        borderRadius="lg"
                        borderColor="gray.700"
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel color="white">Email</FormLabel>
                                <Input color="white" type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel color="white">Senha</FormLabel>
                                <Input color="white" type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox color={"white"}>Lembrar de mim</Checkbox>
                                    <Link color={'yellowPrimary.800'} onClick={() => router.push('/cadastro')}>Esqueceu a senha?</Link>
                                </Stack>
                                <Button
                                    bg={'yellowPrimary.800'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'yellowPrimary.500',
                                    }}
                                    onClick={() => addUser()}
                                    
                                >
                                    Entrar
                                </Button>
                                <h5 style={{color: 'red'}} id='testeErro'></h5>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex></>
    );
}

export function preencherDados(uidUsuario){
    idUser = uidUsuario
    console.log(uidUsuario);
}