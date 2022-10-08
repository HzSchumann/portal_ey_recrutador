import {
    Box,
    Stack,
    Heading,
    Center,
    Icon,
    Text,
    Image,
    Button,
    Badge

} from '@chakra-ui/react';
import router from '../../node_modules/next/router';
import CardPerfil from '../components/Card/card';
import { ArrowForwardIcon} from '@chakra-ui/icons'

import { LogedHeader } from '../components/logedHeader/index';



export default function HomePage() {


    return (
        <>
            <LogedHeader>
            </LogedHeader>
            <Stack minH={'100vh'}  bg="backgroundBlack.700">

                <Box p="2rem" >
                    <Box
                        position={'relative'}
                        height={'300px'}
                        width={'full'}
                        overflow={'hidden'}
                        mb="2rem"
                        borderRadius="lg"
                        backgroundImage={"/images/pug4.png"}
                        bgPosition={'center'}
                        
                                        boxShadow={
                                            '0px 2px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                                        }
                                        >

                    </Box>

                    <Box pb="1rem" cursor="pointer">
                        <Stack
                            bg={'yellowPrimary.800'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(247 244 30 / 48%), 0 10px 10px -5px rgb(247 244 30 / 43%)'
                            }
                            _hover={{
                                bg: 'yellowPrimary.500',
                            }}
                            _focus={{
                                bg: 'yellowPrimary.500',
                            }}
                            borderRadius="lg"
                            w='50%'
                            height='100px'
                            direction={{ base: 'column', md: 'row' }}
                            padding={4}>
                            <Stack
                                flex={1}
                                onClick={() => router.push('/vagas-abertas')}
                                justifyContent="Center"
                                alignItems="left"
                                p={1}
                                pt={2}>
                                <Heading fontSize={'2xl'} fontFamily={'body'} color="black">
                                    Vagas Abertas
                                </Heading>
                            </Stack>
                                <Stack
                                    width={'300px'}
                                    mt={'2rem'}
                                    direction={'row'}
                                    justifyContent={'right'}
                                    alignItems={'center'}
                                >
                                    <Icon color="black" w={8} h={8}>
                                        <ArrowForwardIcon />
                                    </Icon>
                                </Stack>
                            </Stack>
                    </Box>

                    

                </Box>
            </Stack>
        </>
    );
}
