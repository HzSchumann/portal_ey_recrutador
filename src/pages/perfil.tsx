import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { LogedHeader } from '../components/logedHeader/index';


export default function UserProfileEdit(): JSX.Element {
    const router = useRouter();
    return (
        <>
        <LogedHeader>
        </LogedHeader>
        
        <Flex
            minH={'100vh'}
            align={'center'}
            bg={"backgroundBlack.700"}
            justify={'center'}
            >
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={"backgroundBlack.700"}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    borderWidth="1px"
                    borderRadius="lg"
                    borderColor="gray.700"
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} color="white">
                        Editar perfil
                    </Heading>
                    <FormControl id="userName">
                        <FormLabel>User Icon</FormLabel>
                        <Stack direction={['column', 'row']} spacing={6}>
                            <Center>
                                <Avatar size="xl" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80">
                                    <AvatarBadge
                                        as={IconButton}
                                        size="sm"
                                        rounded="full"
                                        top="-10px"
                                        colorScheme="red"
                                        aria-label="remove Image"
                                        icon={<SmallCloseIcon />} />
                                </Avatar>
                            </Center>
                            <Center w="full">
                                <Button w="full">Mudar Avatar</Button>
                            </Center>
                        </Stack>
                    </FormControl>
                    <FormControl id="userName" isRequired>
                        <FormLabel color={"white"}>Usuário</FormLabel>
                        <Input
                            color={"white"}
                            placeholder="Usuário"
                            _placeholder={{ color: 'gray.500' }}
                            type="text" />
                    </FormControl>
                    <FormControl id="email" isRequired>
                        <FormLabel color={"white"}>E-mail</FormLabel>
                        <Input
                            color={"white"}
                            placeholder="E-mail"
                            _placeholder={{ color: 'gray.500' }}
                            type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel color={"white"}>Senha</FormLabel>
                        <Input
                            color={"white"}
                            placeholder="Senha"
                            _placeholder={{ color: 'gray.500' }}
                            type="password" />
                    </FormControl>
                    <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                            onClick={() => router.push('/home-page')}
                            w="full"
                            bg={'red.500'}
                            color={'black'}
                            boxShadow={
                                '235 64 52 -5px rgb(247 244 30 / 48%), 235 64 52 -5px rgb(247 244 30 / 43%)'
                            }
                            _hover={{
                                bg: 'red.200',
                            }}
                            _focus={{
                                bg: 'red.200',
                            }}>
                            Cancelar
                        </Button>
                        <Button
                            w="full"
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
                            Salvar
                        </Button>
                    </Stack>
                </Stack>
            </Flex></>
    );
}