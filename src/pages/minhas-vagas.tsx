import { Heading, Flex, Progress, Spacer, Text, Box, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { Icon, GridItem, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import router from "../../node_modules/next/router";
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";
import db from "../config/firebase";
import db2 from "../config/firebase";
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";


export default function MinhasVagas() {
    const { isOpen: isOpenEnd, onOpen: onOpenEnd, onClose: onCloseEnd } = useDisclosure()
    const { isOpen: isOpenTime, onOpen: onOpenTime, onClose: onCloseTime } = useDisclosure()
    const { isOpen: isOpenStatusEntrevista, onOpen: onOpenStatusEntrevista, onClose: onCloseStatusEntrevista } = useDisclosure()
    const { isOpen: isOpenStatusFinal, onOpen: onOpenStatusFinal, onClose: onCloseStatusFinal } = useDisclosure()
    const { isOpen: isOpenAcompanhe, onOpen: onOpenAcompanhe, onClose: onCloseAcompanhe } = useDisclosure()

    const [allCampaigns, setProposta] = useState([]);

    const q = query(collection(db, "Vagas"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const propostas = [];
    
        querySnapshot.forEach((doc) => {
            propostas.push({...doc.data(), id: doc.id});
            unsubscribe()
        });
        console.log(propostas);
    

    setProposta(propostas);

    });

    const [todasEmpresas, setEmpresa] = useState([]);

    const q2 = query(collection(db2, "MinhasVagas"));
    const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
    const propostas2 = [];
    
        querySnapshot.forEach((doc) => {
            propostas2.push({...doc.data(), id: doc.id});
            unsubscribe2()
        });
        console.log(propostas2);
    

        setEmpresa(propostas2);

    });
    if(todasEmpresas.length > 0){
        unsubscribe2()
        console.log(todasEmpresas.length)
    }

    if(allCampaigns.length > 0){
        unsubscribe()
        console.log(allCampaigns.length)
    }

    function Item(props){
        return(
            <Center >
                    <Box mb="7rem" h="100px" w="60%" p="0.5rem">
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="gray.700"
                            w='100%'
                            height='200px'
                            direction={{ base: 'column', md: 'row' }}
                            bg={'backgroundBlack.700'}
                            boxShadow={'2xl'}
                            padding={4}>

                            <Stack
                                flex={1}
                                flexDirection="column"
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                    {props.proposta.name}
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color='white'>
                                    Nível: Estágio
                                </Text>
                            </Stack>
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                            >

                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                >
                                    <Button
                                        onClick={() => router.push('/vaga-ux?idproposta=' + props.proposta.id + '&requisitos=' + props.proposta.requisitos + '&descricao=' + props.proposta.descricao + '&name=' + props.proposta.name + '&comoUsamosEy=' + props.proposta.comoUsamosEy + '&nivel=' + props.proposta.nivel)}
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'backgroundBlack.700'}
                                        color={'yellowPrimary.800'}
                                        border="1px" borderColor="gray.700" borderStyle={'solid'}
                                        _hover={{
                                            bg: 'gray.800',
                                        }}
                                        _focus={{
                                            bg: 'gray.800',
                                        }}>
                                        Ver Vaga
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
        )
    }

    function Item2(props2){
        return(

                <Center >
                    <Box mb="7rem" h="100px" w="60%" p="0.5rem">
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="gray.700"
                            w='100%'
                            height='200px'
                            direction={{ base: 'column', md: 'row' }}
                            bg={'backgroundBlack.700'}
                            boxShadow={'2xl'}
                            padding={4}>

                            <Stack
                                flex={1}
                                flexDirection="column"
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                    {props2.proposta2.name}
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color='white'>
                                    Nível: {props2.proposta2.nivel}
                                </Text>
                            </Stack>
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                            >

                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                >
                                    <Button
                                        onClick={onOpenAcompanhe}
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'backgroundBlack.700'}
                                        color={'white'}
                                        border="1px" borderColor="gray.700" borderStyle={'solid'}
                                        _hover={{
                                            bg: 'gray.800',
                                        }}
                                        _focus={{
                                            bg: 'gray.800',
                                        }}>
                                        Acompanhe
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
                    
                
        )
    }


    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'150vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">Meus Processos Seletivos</Heading>
                    </Box >
                </Center>

                {todasEmpresas.map((proposta2)=> <Item2 key={proposta2.id} proposta2={proposta2}/>)}

                <Center >
                    <Box mb="7rem" h="100px" w="60%" p="0.5rem">
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="gray.700"
                            w='100%'
                            height='200px'
                            direction={{ base: 'column', md: 'row' }}
                            bg={'backgroundBlack.700'}
                            boxShadow={'2xl'}
                            padding={4}>

                            <Stack
                                flex={1}
                                flexDirection="column"
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                    Estágio em Back-End Dev
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color='white'>
                                    Nível: Estágio
                                </Text>
                            </Stack>
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                            >

                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                >
                                    <Button
                                        onClick={() => router.push('/formulario-vaga')}
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'backgroundBlack.700'}
                                        color={'green.300'}
                                        border="1px" borderColor="gray.700" borderStyle={'solid'}
                                        _hover={{
                                            bg: 'gray.800',
                                        }}
                                        _focus={{
                                            bg: 'gray.800',
                                        }}>
                                        Enviar Informações
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>

                <Center >
                    <Box mb="7rem" h="100px" w="60%" p="0.5rem">
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="gray.700"
                            w='100%'
                            height='200px'
                            direction={{ base: 'column', md: 'row' }}
                            bg={'backgroundBlack.700'}
                            boxShadow={'2xl'}
                            padding={4}>

                            <Stack
                                flex={1}
                                flexDirection="column"
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                    Estágio em Front-End Dev
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color='white'>
                                    Nível: Estágio
                                </Text>
                            </Stack>
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                            >

                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                >
                                    <Button
                                        onClick={onOpenStatusEntrevista}
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'backgroundBlack.700'}
                                        color={'white'}
                                        border="1px" borderColor="gray.700" borderStyle={'solid'}
                                        _hover={{
                                            bg: 'gray.800',
                                        }}
                                        _focus={{
                                            bg: 'gray.800',
                                        }}>
                                        Acompanhe
                                    </Button>

                                    <Button
                                        onClick={onOpenTime}
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'backgroundBlack.700'}
                                        color={'yellow.300'}
                                        border="1px" borderColor="gray.700" borderStyle={'solid'}
                                        _hover={{
                                            bg: 'gray.800',
                                        }}
                                        _focus={{
                                            bg: 'gray.800',
                                        }}>
                                        Entrevista Marcada
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>

                <Center >
                    <Box mb="7rem" h="100px" w="60%" p="0.5rem">
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="gray.700"
                            w='100%'
                            height='200px'
                            direction={{ base: 'column', md: 'row' }}
                            bg={'backgroundBlack.700'}
                            boxShadow={'2xl'}
                            padding={4}>

                            <Stack
                                flex={1}
                                flexDirection="column"
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="white">
                                    Project Management Office
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color='white'>
                                    Nível: Sênior
                                </Text>
                            </Stack>
                            <Stack
                                alignItems={'center'}
                                justifyContent={'center'}
                            >

                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                >
                                    <Button
                                        onClick={onOpenStatusFinal}
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'backgroundBlack.700'}
                                        color={'white'}
                                        border="1px" borderColor="gray.700" borderStyle={'solid'}
                                        _hover={{
                                            bg: 'gray.800',
                                        }}
                                        _focus={{
                                            bg: 'gray.800',
                                        }}>
                                        Acompanhe
                                    </Button>

                                    <Button
                                        onClick={onOpenEnd}
                                        flex={1}
                                        fontSize={'sm'}
                                        bg={'backgroundBlack.700'}
                                        color={'red.500'}
                                        border="1px" borderColor="gray.700" borderStyle={'solid'}
                                        _hover={{
                                            bg: 'gray.800',
                                        }}
                                        _focus={{
                                            bg: 'gray.800',
                                        }}>
                                        Fechado
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>

                <Center >
                    <Divider w="70%" mt="2rem" />
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' mt="3rem" mb="2rem">
                        <Heading fontSize="24px" color="white">Sugestões de Vagas</Heading>
                    </Box >
                </Center>
                {allCampaigns.map((proposta)=> <Item key={proposta.id} proposta={proposta}/>)}
                <Modal onClose={onCloseEnd} isOpen={isOpenEnd} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Project Management Office</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Olá, tudo bem?</Text>
                            <Text mb="2rem">Infelizmente o seu perfil não foi compatível com a vaga, mas não se desanime, você pode continuar se inscrevendo para a vaga.</Text>
                            <Text as='b' mt="2rem">Status:</Text>
                            <Text color={'red.500'}>Fechado</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onCloseEnd} bg={'yellowPrimary.800'}
                                color={'black'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                }
                                _hover={{
                                    bg: 'yellowPrimary.500',
                                }}
                                _focus={{
                                    bg: 'yellowPrimary.500',
                                }}>Fechar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Modal onClose={onCloseTime} isOpen={isOpenTime} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Estágio em Front-End Dev</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex mt="1rem" mb="1rem">
                                <Text mr="0.5rem">Dia: </Text>
                                <Text as="b">16/06/2022</Text>
                            </Flex>

                            <Flex mb="1rem">
                                <Text mr="0.5rem">Hora: </Text>
                                <Text as="b">09:00</Text>
                            </Flex>

                            <Flex mb="1rem">
                                <Text mr="0.5rem">Local: </Text>
                                <Text as="u" color="blue" cursor="pointer">www.callmeeting.com/wrtjd</Text>
                            </Flex>

                            <Text as='b'>Status:</Text>
                            <Text color={'yellow.400'}>Entrevista com o gestor</Text>

                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={onCloseTime}
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
                                Acessar
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Modal onClose={onCloseStatusEntrevista} size={'xl'} isOpen={isOpenStatusEntrevista} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Acompanhe seu processo!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>
                                <Progress w="100%" value={68} size='xs' colorScheme="yellow" mb="2rem" />
                            </Center>

                            <Box>
                                <Flex>
                                    <Text>Análise de Currículo</Text>
                                    <Text>Realizar Atividades</Text>
                                    <Text>Entrevista RH</Text>
                                    <Text color={'yellow.600'}>Entrevista Gestor</Text>
                                    <Text>Resposta Final</Text>
                                </Flex>
                            </Box>

                            <Center>
                                <Box mt="3rem" mb="3rem">
                                    <Text ml="11rem">Status:</Text>
                                    <Heading color="yellow.600">Entrevista com o Gestor</Heading>
                                </Box>
                            </Center>

                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onCloseStatusEntrevista} bg={'yellowPrimary.800'}
                                color={'black'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                }
                                _hover={{
                                    bg: 'yellowPrimary.500',
                                }}
                                _focus={{
                                    bg: 'yellowPrimary.500',
                                }}>Fechar</Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>


                <Modal onClose={onCloseStatusFinal} size={'xl'} isOpen={isOpenStatusFinal} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Acompanhe seu processo!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>
                                <Progress w="100%" value={100} size='xs' colorScheme="yellow" mb="2rem" />
                            </Center>

                            <Box>
                                <Flex>
                                    <Text>Análise de Currículo</Text>
                                    <Text>Realizar Atividades</Text>
                                    <Text>Entrevista RH</Text>
                                    <Text>Entrevista Gestor</Text>
                                    <Text color={'yellow.600'}>Resposta Final</Text>
                                </Flex>
                            </Box>

                            <Center>
                                <Box mt="3rem" mb="3rem">
                                    <Text ml="3rem">Status:</Text>
                                    <Heading color="red.500">Fechado</Heading>
                                </Box>
                            </Center>

                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onCloseStatusFinal} bg={'yellowPrimary.800'}
                                color={'black'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                }
                                _hover={{
                                    bg: 'yellowPrimary.500',
                                }}
                                _focus={{
                                    bg: 'yellowPrimary.500',
                                }}>Fechar</Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            
            <Modal onClose={onCloseAcompanhe} size={'xl'} isOpen={isOpenAcompanhe} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Acompanhe seu processo!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>
                                <Progress w="100%" value={5} size='xs' colorScheme="yellow" mb="2rem" />
                            </Center>

                            <Box>
                                <Flex>
                                    <Text color={'yellow.600'}>Análise de Currículo</Text>
                                    <Text>Realizar Atividades</Text>
                                    <Text>Entrevista RH</Text>
                                    <Text>Entrevista Gestor</Text>
                                    <Text>Resposta Final</Text>
                                </Flex>
                            </Box>

                            <Center>
                                <Box mt="3rem" mb="3rem">
                                    <Text ml="9rem">Status:</Text>
                                    <Heading color="yellow.500">Análise de Currículo</Heading>
                                </Box>
                            </Center>

                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onCloseAcompanhe} bg={'yellowPrimary.800'}
                                color={'black'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                }
                                _hover={{
                                    bg: 'yellowPrimary.500',
                                }}
                                _focus={{
                                    bg: 'yellowPrimary.500',
                                }}>Fechar</Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Stack>

        </>
    )
}
