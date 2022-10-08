import { Grid, GridItem } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";

import {
    Center,
    Heading,
    Box,
    Stack,
    Text,
    Button,
} from '@chakra-ui/react';
import router from 'next/router';
import { doc, setDoc } from "firebase/firestore";
import db from "../config/firebase";

export default function EstagFront() {

    const nomeU = new URLSearchParams(window.location.search).get("name");
    const reqU = new URLSearchParams(window.location.search).get("requisitos");
    const desU = new URLSearchParams(window.location.search).get("descricao");
    const cueU = new URLSearchParams(window.location.search).get("comoUsamosEy");

    async function adicionarProposta(){

        const docData = {
            descricao: new URLSearchParams(window.location.search).get("descricao"),
            comoUsamosEy: new URLSearchParams(window.location.search).get("comoUsamosEy"),
            name:  new URLSearchParams(window.location.search).get("name"),
            requisitos: new URLSearchParams(window.location.search).get("requisitos"),
            nivel: new URLSearchParams(window.location.search).get("nivel") 
        };

        await setDoc(doc(db, "MinhasVagas", `Empresa ${new URLSearchParams(window.location.search).get("name")}`), docData);
        router.push('/minhas-vagas');
    }

    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">{nomeU}</Heading>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Descrição da vaga</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        {desU}
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Como usamos na EY</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                    {cueU}
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Requisitos</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        {reqU}
                    </Text>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Button
                                        onClick={() => router.push('/curriculos-recebidos')}
                                        w="100%"
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'yellowPrimary.800'}
                                        color={'black'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'yellowPrimary.500',
                                        }}
                                        _focus={{
                                            bg: 'yellowPrimary.500',
                                        }}>
                                        Ver Currículos Recebidos
                                    </Button>
                    </Box >
                </Center>

            </Stack>

        </>
    )
}
