import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import router from '../../../node_modules/next/router';

export default function CardPerfil() {
    return (
        <Center pb="1rem">
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w='100%'
                height='200px'
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex bg="gray">
                    <Image
                        onClick={() => router.push('/perfil-marca')}
                        objectFit="cover"
                        boxSize="100%"
                        src={
                            'https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/12/logo-adidas-2022-pb.jpg'
                        }
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="Center"
                    alignItems="left"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        Adidas
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        @adidas
                    </Text>
                    <Text
                        textAlign={'left'}
                        color={useColorModeValue('gray.700', 'gray.400')}>
                        Na Adidas Brasil, você vai encontrar tênis, roupas esportivas e material esportivo criados com tecnologaa e design.
                    </Text>
                    <Stack align={'center'} justify={'left'} direction={'row'} mt={6}>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #Estilo
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #Esporte
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #Futebol
                        </Badge>
                    </Stack>

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
                            onClick={() => router.push('/perfil-marca')}
                            flex={1}
                            fontSize={'sm'}
                            _focus={{
                                bg: 'gray.200',
                            }}>
                            Perfil
                        </Button>
                        <Button
                            onClick={() => router.push('/propostas')}
                            flex={1}
                            fontSize={'sm'}
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
                            }}>
                            Enviar Proposta
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    );
}