import { Grid, GridItem, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
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
import { Search2Icon } from '@chakra-ui/icons';
import db from "../config/firebase"; 
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Vagas() {

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
                                    {props.proposta.name}
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
                                        onClick={() => router.push('/vaga-ux?idproposta=' + props.proposta.id + '&requisitos=' + props.proposta.requisitos + '&descricao=' + props.proposta.descricao + '&name=' + props.proposta.name + '&comoUsamosEy=' + props.proposta.comoUsamosEy + '&nivel=' + props.proposta.nivel)}
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

        )
    }


    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack  minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">Vagas</Heading>
                    </Box >
                </Center>


                <Center>

                        <Box  h="100px" w="60%" p="0.5rem">
                            <InputGroup size='md'>
                                <Input
                                    bg='gray.700'
                                    pr='4.5rem'
                                    w="100%"
                                    variant='filled'
                                    placeholder='Buscar Vagas'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button bg='gray.600' leftIcon={<Search2Icon />} h='1.75rem' size='sm'></Button>
                                </InputRightElement>
                            </InputGroup>
                        </Box>
                </Center>
                {allCampaigns.map((proposta)=> <Item key={proposta.id} proposta={proposta}/>)}
                
            </Stack>

        </>
    )
}