import { Heading, Textarea, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Progress, FormControl, Stack, Button } from '@chakra-ui/react'
import { FormLabel, Input, Center } from '@chakra-ui/react'
import router from "../../node_modules/next/router";
import { LogedHeader } from "../components/logedHeader/index";
import CardProposta from "../components/Notificacoes/cardProposta";
import CardVizualizou from "../components/Notificacoes/cardVizualizou";
import { useRouter } from 'next/router';
import { doc, setDoc } from "firebase/firestore";
import db from '../config/firebase';


export default function EnviarAtividade() {
    const router = useRouter();

    async function adicionarProposta(){

        const docData = {
            descricao: document.getElementById("descricao").value,
            comoUsamosEy: document.getElementById("comoUsamosEy").value,
            name: document.getElementById("name").value,
            requisitos: document.getElementById("requisitos").value,
            nivel: document.getElementById("nivel").value 
        };

        await setDoc(doc(db, "Vagas", `Vaga de ${document.getElementById("name").value}`), docData);
        router.push('/vagas-abertas');
    }

    return (

        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'} bg="backgroundBlack.700">

                <Center mt="2rem" mb="2rem">
                    <Box w="60%" mr="4" rounded='md' text-align='center'>
                        <Heading color="white">Envie o link da atividade para o candidato</Heading>
                    </Box >
                </Center>

                <Center>
                    <FormControl w="60%">
                        <FormLabel color="white">Link da atividade: </FormLabel>
                        <Input type='text' id="name" color="white"/>
                    </FormControl>
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
                                        }} onClick={() => adicionarProposta()}>Enviar</Button>
                </Center>

            </Stack>

        </>
    )
}