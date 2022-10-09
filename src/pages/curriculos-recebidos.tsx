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
import db from "../config/firebase"; 
import db2 from "../config/firebase";
import db3 from "../config/firebase";
import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function CurriculosRecebidos() {

    const [allCampaigns, setProposta] = useState([]);

    const q = query(collection(db, "Curriculos"));
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

    const q2 = query(collection(db2, "CurriculosAprovados"));
    const unsubscribe2 = onSnapshot(q2, (querySnapshot) => {
    const propostas2 = [];
    
        querySnapshot.forEach((doc) => {
            propostas2.push({...doc.data(), id: doc.id});
            unsubscribe2()
        });
        console.log(propostas2);
    

        setEmpresa(propostas2);

    });
    const [todasEmpresas2, setEmpresa2] = useState([]);

    const q3 = query(collection(db3, "CandidatosContratados"));
    const unsubscribe3 = onSnapshot(q3, (querySnapshot) => {
    const propostas3 = [];
    
        querySnapshot.forEach((doc) => {
            propostas3.push({...doc.data(), id: doc.id});
            unsubscribe3()
        });
        console.log(propostas3);
    

        setEmpresa2(propostas3);

    });
    if(todasEmpresas.length > 0){
        unsubscribe3()
        console.log(todasEmpresas2.length)
    }

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
                                    {props.proposta.estado}
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
                                        onClick={() =>router.push('/ver-curriculo?idproposta=' + props.proposta.id + '&area=' + props.proposta.area + '&graduacao=' + props.proposta.graduacao+ '&name=' + props.proposta.name + '&experiencia=' + props.proposta.experiencia + '&cursos=' + props.proposta.cursos + '&estado=' + props.proposta.estado)}
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
                                {props2.proposta2.name}
                            </Heading>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('white', 'gray.400')}>
                                {props2.proposta2.estado}
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
                                    onClick={() => router.push('/enviar-atividade?idproposta=' + props2.proposta2.id + '&name=' + props2.proposta2.name)}
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
                                    Enviar Atividade
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Center>

    )
}

function Item3(props3){
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
                            {props3.proposta3.name}
                            </Heading>
                            <Text
                                textAlign={'left'}
                                color={useColorModeValue('white', 'gray.400')}>
                                
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
                                    onClick={() => router.push('/informacoes-candidato?idproposta=' + props3.proposta3.id + '&name=' + props3.proposta3.name)}
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
                                    Mostar Informações
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
                {allCampaigns.map((proposta)=> <Item key={proposta.id} proposta={proposta}/>)}
                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mt="2rem" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">Currículos Aprovados</Heading>
                    </Box >
                </Center>

                {todasEmpresas.map((proposta2)=> <Item2 key={proposta2.id} proposta2={proposta2}/>)}
                
                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mt="2rem" mr="4" rounded='md' text-align='center' ml="2rem">
                        <Heading color="White">Candidatos Contratados</Heading>
                    </Box >
                </Center>
                {todasEmpresas2.map((proposta3)=> <Item3 key={proposta3.id} proposta3={proposta3}/>)}
                
            </Stack>

        </>
    )
}