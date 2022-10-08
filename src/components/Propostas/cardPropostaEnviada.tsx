import { Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Button} from '@chakra-ui/react'



export default function CardPropostaEnviada() {
    return (

        <>   
                    <Flex ml='2rem' p="4"boxShadow='xs' rounded='md' bg='white'>
                        <Avatar src='https://fraguru.com/mdimg/dizajneri/o.582.jpg' />
                        <Box ml='2rem'>
                            <Text fontWeight='bold'>
                                Natura
                            </Text>
                            <Text fontSize='sm'>@natura</Text>
                        </Box>
                        <Spacer />
                        <Box
                        ml='2rem' display="flex" float="right"
                        >
                            <Text fontWeight='bold' ml='2rem' mt="8px" color="green">
                                Proposta Aceita
                            </Text>
                        </Box>
                    </Flex>
        </>
    )
}