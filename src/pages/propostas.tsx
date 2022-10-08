import { Heading, Flex, Avatar, Badge, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardPropostaEnviada from "../components/Propostas/cardPropostaEnviada";


export default function Propostas() {
    return (

        <>
        <LogedHeader>
        </LogedHeader>
            <Grid
                pl="2rem"
                pr="2rem"
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt='2rem'
            >
                <GridItem rowSpan={2}>
                    <Center  h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center'>
                        <Heading >Propostas</Heading>
                    </Center >
                </GridItem>

                <GridItem colSpan={4}>
                    <CardProposta></CardProposta>
                    <CardPropostaEnviada></CardPropostaEnviada>
                    <CardProposta></CardProposta>
                    <CardProposta></CardProposta>
                    <CardPropostaEnviada></CardPropostaEnviada>
                    <CardProposta></CardProposta>

                    
                </GridItem>
            </Grid>

        </>
    )
}