import { Heading, Spacer, Box } from "@chakra-ui/react";
import { Progress, Stack, Button } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import router from "../../node_modules/next/router";
import { LogedHeader } from "../components/logedHeader/index";


export default function MinhasVagas() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">Enviar documentos necessários para prosseguir no processo!</Heading>
                    </Box >
                </Center>

                <Center>
                    <Progress w="60%" value={50} size='xs' colorScheme="yellow" mb="2rem" />
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="black"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">RG</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button type="file" bg="yellowPrimary.800" color="white" mr="2rem">Escolher Arquivo</Button>
                        </Box>
                    </Box>
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="black"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">CPF</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button bg="yellowPrimary.800" color="white" mr="2rem">Escolher Arquivo</Button>
                        </Box>
                    </Box>
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="black"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">PIS</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button bg="yellowPrimary.800" color="white" mr="2rem">Escolher Arquivo</Button>
                        </Box>
                    </Box>
                </Center>

                <Center>
                    <Box border="1px" borderColor="gray.700" borderStyle={'solid'} h="100px" w="60%" bg="black"
                            borderRadius="lg" p="0.5rem" display="flex" alignItems="center">
                        <Box borderRight="1px" w="15%" borderColor="gray.700" borderStyle={'solid'}>
                            <Heading color="white " align="center">CV</Heading>
                        </Box>
                        <Spacer />
                        <Box>
                            <Button bg="yellowPrimary.800" color="white" mr="2rem">Escolher Arquivo</Button>
                        </Box>
                    </Box>
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
                                        }} onClick={() => router.push('/contrato-vaga')}>Continuar</Button>
                </Center>
                
            </Stack>

        </>
    )
}