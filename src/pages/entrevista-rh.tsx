import { Heading, Textarea, Avatar, Spacer, Text, Box, Flex, useDisclosure, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { Progress, FormControl, Stack, Button } from '@chakra-ui/react'
import { FormLabel, Input, Center } from '@chakra-ui/react'
import router from "next/router";
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";
import { useRouter } from 'next/router';
import { doc, setDoc } from "firebase/firestore";
import db from '../config/firebase';


export default function EntrevistaRH() {
    const router = useRouter();
    const { isOpen, onOpen, onClose} = useDisclosure()

    async function adicionarProposta(){

        const docData = {
            descricao: document.getElementById("descricao").value,
            comoUsamosEy: document.getElementById("comoUsamosEy").value,
            name: document.getElementById("name").value,
            requisitos: document.getElementById("requisitos").value,
            nivel: document.getElementById("nivel").value 
        };

        await setDoc(doc(db, "Vagas", `Vaga de ${document.getElementById("name").value}`), docData);
        router.push('/vagas-abertas');
    }

    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">Preencha os detalhes da entrevista para o candidato</Heading>
                    </Box >
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Dia: </FormLabel>
                        <Input type='date' id="name" color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Hora: </FormLabel>
                        <Input type='time' id="name" color="white"/>
                    </FormControl>
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Local/Url: </FormLabel>
                        <Input type='link' id="name" color="white"/>
                    </FormControl>
                </Center>

                

                <Center>
                    <Button mt="2rem" w="60%" bg={'yellowPrimary.800'}
                                        color={'black'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'yellowPrimary.500',
                                        }}
                                        _focus={{
                                            bg: 'yellowPrimary.500',
                                        }} onClick={() => adicionarProposta()}>Enviar</Button>
                </Center>

                <Center mt="2rem" mb="2rem" >
                    <Box w="60%" mt="3rem" mb="2rem" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">O Candidato foi aprovado?</Heading>
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