import { Grid, GridItem, Spacer } from '@chakra-ui/react'
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

export default function VagaPMO() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">Henzo Schumann Barbosa</Heading>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Endereço
</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        Rua Francisco 345
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Agência</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        0311890
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Conta</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        33679
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="1rem">
                        <Heading fontSize="24px" color="White">Carteira de Trabalho</Heading>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Text color="white">
                        433412364
                    </Text>
                    </Box >
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="backgroundBlack.700"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">RG</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button type="file" bg="green.500" color="white" mr="2rem">Recebido</Button>
                        </Box>
                    </Box>
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="backgroundBlack.700"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">CPF</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button bg="green.500" color="white" mr="2rem">Recebido</Button>
                        </Box>
                    </Box>
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="backgroundBlack.700"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">PIS</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button bg="green.500" color="white" mr="2rem">Recebido</Button>
                        </Box>
                    </Box>
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="backgroundBlack.700"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">CV</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button bg="green.500" color="white" mr="2rem">Recebido</Button>
                        </Box>
                    </Box>
                </Center>

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mt="3rem" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Button
                                        onClick={() => router.push('/vagas-abertas')}
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
                                        Enviar Carta Oferta
                                    </Button>
                    </Box >
                </Center>

            </Stack>

        </>
    )
}