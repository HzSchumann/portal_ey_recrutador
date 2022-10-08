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

export default function VagaQA() {
    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">QA Engineer Júnior</Heading>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vel tortor eu lobortis. Nunc nec arcu vel tellus ultrices volutpat. Duis ut augue at magna congue porta sit amet quis lorem. Donec elementum viverra iaculis. Suspendisse in velit eu nunc porttitor euismod vehicula nec tellus. Vivamus eu ligula commodo, molestie metus sit amet, laoreet mauris. Cras sit amet odio sit amet massa sollicitudin elementum a in ante. Pellentesque eget quam enim.

                        Cras fringilla diam nulla. Integer dolor sit amet lectus maximus cursus. Sed condimentum sapien sed ante ullamcorper facilisis. Nam tellus eros, faucibus nec dictum nec, tempus a diam. Nunc condimentum venenatis consequat. Donec pulvinar sem sapien, sit amet eleifend lorem tincidunt quis. Mauris consectetur, neque nec ultricies malesuada, nunc nibh scelerisque velit, at egestas elit urna vitae odio. Quisque tristique urna nec vestibulum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor sodales lacus, eget fringilla sapien vulputate eu.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vel tortor eu lobortis. Nunc nec arcu vel tellus ultrices volutpat. Duis ut augue at magna congue porta sit amet quis lorem. Donec elementum viverra iaculis. Suspendisse in velit eu nunc porttitor euismod vehicula nec tellus. Vivamus eu ligula commodo, molestie metus sit amet, laoreet mauris. Cras sit amet odio sit amet massa sollicitudin elementum a in ante. Pellentesque eget quam enim.

                        Cras fringilla diam nulla. Integer dolor sit amet lectus maximus cursus. Sed condimentum sapien sed ante ullamcorper facilisis. Nam tellus eros, faucibus nec dictum nec, tempus a diam. Nunc condimentum venenatis consequat. Donec pulvinar sem sapien, sit amet eleifend lorem tincidunt quis. Mauris consectetur, neque nec ultricies malesuada, nunc nibh scelerisque velit, at egestas elit urna vitae odio. Quisque tristique urna nec vestibulum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor sodales lacus, eget fringilla sapien vulputate eu.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vel tortor eu lobortis. Nunc nec arcu vel tellus ultrices volutpat. Duis ut augue at magna congue porta sit amet quis lorem. Donec elementum viverra iaculis. Suspendisse in velit eu nunc porttitor euismod vehicula nec tellus. Vivamus eu ligula commodo, molestie metus sit amet, laoreet mauris. Cras sit amet odio sit amet massa sollicitudin elementum a in ante. Pellentesque eget quam enim.

                        Cras fringilla diam nulla. Integer dolor sit amet lectus maximus cursus. Sed condimentum sapien sed ante ullamcorper facilisis. Nam tellus eros, faucibus nec dictum nec, tempus a diam. Nunc condimentum venenatis consequat. Donec pulvinar sem sapien, sit amet eleifend lorem tincidunt quis. Mauris consectetur, neque nec ultricies malesuada, nunc nibh scelerisque velit, at egestas elit urna vitae odio. Quisque tristique urna nec vestibulum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor sodales lacus, eget fringilla sapien vulputate eu.
                    </Text>
                    </Box >
                </Center>

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem" mb="3rem">
                    <Button
                                        onClick={() => router.push('/minhas-vagas')}
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
                                        Enviar Curriculo
                                    </Button>
                    </Box >
                </Center>

            </Stack>

        </>
    )
}