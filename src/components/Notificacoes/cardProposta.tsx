import { Flex, Avatar, Spacer, Text, Box } from "@chakra-ui/react";
import { Button} from '@chakra-ui/react'
import router from "../../../node_modules/next/router";



export default function CardProposta() {
    return (

        <>   
                    <Flex ml='2rem' p="4"boxShadow='xs' rounded='md' bg='white'>
                        <Avatar src='https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/12/logo-adidas-2022-pb.jpg' onClick={() => router.push('/perfil-marca')}/>
                        <Box ml='2rem'>
                            <Text fontWeight='bold'>
                                Adidas
                            </Text>
                            <Text fontSize='sm'>@adidas</Text>
                        </Box>
                        <Spacer />
                        <Box
                        ml='2rem' display="flex" float="right"
                        >
                            <Button
                            bg={'bluePrimary.500'} 
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'bluePrimary.600',
                            }}
                            _focus={{
                                bg: 'bluePrimary.600',
                            }}
                            >
                                Ver proposta
                            </Button>
                        </Box>
                    </Flex>
        </>
    )
}