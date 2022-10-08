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

export default function Vagas() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack  minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">Vagas Indicadas</Heading>
                        <Text mt="1rem" fontSize="20px" color="white">Com base nos cursos que você completou.</Text>
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
                                    Estágio User Experience
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color={useColorModeValue('white', 'gray.400')}>
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
                                        Ver Vaga
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>

                <Center>
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
                                    Talent Trainee
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color={useColorModeValue('white', 'gray.400')}>
                                    Nível: Trainee
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
                                        onClick={() => router.push('/vaga-trainee')}
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
                                        Ver Vaga
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>                    


                <Center>
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
                                    QA Engineer Júnior
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color={useColorModeValue('white', 'gray.400')}>
                                    Nível: Júnior
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
                                        onClick={() => router.push('/vaga-qa')}
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
                                        Ver Vaga
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Center>

                <Center>
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
                                    Project Management - PMO
                                </Heading>
                                <Text
                                    textAlign={'left'}
                                    color={useColorModeValue('white', 'gray.400')}>
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
                                        onClick={() => router.push('/vaga-pmo')}
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
                                        Ver Vaga
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