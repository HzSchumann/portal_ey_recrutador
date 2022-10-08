import { Grid, GridItem } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";

import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Box,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import router from 'next/router';

export default function CurriculosRecebidos() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack  minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem">
                    <Button
                                        onClick={() => router.push('/abrir-vaga')}
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
                                        Abrir Nova Vaga
                                    </Button>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">Currículos Recebidos</Heading>
                    </Box >
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
                            bg={useColorModeValue('backgroundBlack.700', 'gray.900')}
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
                                    Henzo Schumann Barbosa
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color={useColorModeValue('white', 'gray.400')}>
                                    São Paulo
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
                                        onClick={() => router.push('/ver-curriculo')}
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
                                        Ver Curriculo
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mt="2rem" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">Currículos Aprovados</Heading>
                    </Box >
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
                            bg={useColorModeValue('backgroundBlack.700', 'gray.900')}
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
                                    Rapahel Moser
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color={useColorModeValue('white', 'gray.400')}>
                                    Osasco
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
                                        onClick={() => router.push('/vaga-ux')}
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
                                        Ver Curriculo
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>


                
            </Stack>

        </>
    )
}