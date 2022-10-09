import { Flex, Grid, GridItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress, Textarea, useDisclosure } from '@chakra-ui/react'
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
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import db from "../config/firebase";

export default function VerCurriculo() {
    const { isOpen, onOpen, onClose} = useDisclosure()

    const nomeU = new URLSearchParams(window.location.search).get("name");
    const areaU = new URLSearchParams(window.location.search).get("area");
    const cursosU = new URLSearchParams(window.location.search).get("cursos");
    const experienciaU = new URLSearchParams(window.location.search).get("experiencia");
    const graduacaoU = new URLSearchParams(window.location.search).get("graduacao");
    const idpu = new URLSearchParams(window.location.search).get("idproposta") 
  
    async function adicionarProposta(){

        const docData = {
            area: new URLSearchParams(window.location.search).get("area"),
            graduacao: new URLSearchParams(window.location.search).get("graduacao"),
            name:  new URLSearchParams(window.location.search).get("name"),
            experiencia: new URLSearchParams(window.location.search).get("experiencia"),
            estado: new URLSearchParams(window.location.search).get("estado")
        };

        await setDoc(doc(db, "CurriculosAprovados", `Curriculo de ${new URLSearchParams(window.location.search).get("name")}`), docData);

        const docRef = doc(db, "Curriculos", idpu);

        deleteDoc(docRef)
            .then(() => {
                console.log("Entire Document has been deleted successfully.")
            })
            .catch(error => {
                console.log(error);
            })
            router.push('/curriculos-recebidos');
    }
//router.push('/minhas-vagas');
    

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
                        <Heading fontSize="24px" color="White">Área</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        {areaU}
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Graduação</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        {graduacaoU}
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Experiência de Trabalho</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        {experienciaU}
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Cursos</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        {cursosU}
                    </Text>
                    </Box >
                </Center>

            

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                        <Flex>

                    <Button
                                        onClick={() => adicionarProposta()}
                                        mr="3rem"
                                        w="80%"
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'green.400'}
                                        color={'black'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(104 240 0 / 48%), 0 10px 10px -5px rgb(104 240 0 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'green.200',
                                        }}
                                        _focus={{
                                            bg: 'green.200',
                                        }}>
                                        Aprovar
                                    </Button>

                                    <Button
                                        onClick={onOpen}
                                        w="80%"
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'red.500'}
                                        color={'black'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(240 0 0 / 48%), 0 10px 10px -5px rgb(240 0 0/ 43%)'
                                        }
                                        _hover={{
                                            bg: 'red.300',
                                        }}
                                        _focus={{
                                            bg: 'red.300',
                                        }}>
                                        Recusar
                                    </Button>
                        </Flex>
                    </Box >
                </Center>

            </Stack>

            <Modal onClose={onClose} size={'xl'} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Justifique a recusa!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>

                            <Box>
                                <Flex>
                                    <Textarea />
                                </Flex>
                            </Box>

                            

                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => router.push('/curriculos-recebidos')} bg={'yellowPrimary.800'}
                                color={'black'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                }
                                _hover={{
                                    bg: 'yellowPrimary.500',
                                }}
                                _focus={{
                                    bg: 'yellowPrimary.500',
                                }}>Enviar</Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>

        </>
    )
}