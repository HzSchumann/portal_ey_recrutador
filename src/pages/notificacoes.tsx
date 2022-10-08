import { Heading, Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup, Center } from '@chakra-ui/react'
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";


export default function Notificacoes() {
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
                mt="2rem"
            >
                <GridItem rowSpan={2}>
                    <Center h='200px' mr="4" boxShadow='xs' rounded='md' bg='white' text-align='center'>
                        <Heading >Suas Notificações</Heading>
                    </Center >
                </GridItem>

                <GridItem colSpan={4}>
                    <CardProposta></CardProposta>
                    <CardVizualizou></CardVizualizou>
                </GridItem>
            </Grid>

        </>
    )
}