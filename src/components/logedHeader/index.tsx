import {
    Box,
    Flex,
    Avatar,
    HStack,
    Icon,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    InputGroup,
    Image,
    Input,
    InputRightElement,

} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Search2Icon } from '@chakra-ui/icons';
import { AiOutlineHome, AiOutlinePlayCircle, AiOutlineFileText } from "react-icons/ai";


export function LogedHeader() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();


    return (
        <>
            <Box 
                bg={useColorModeValue('backgroundBlack.700')}
                px={4} h="60px" borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.700')}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Box ml="1rem"  cursor='pointer' onClick={() => router.push('/home-page')}>
                            <Image src="/images/eyLogo.svg" h="2rem"></Image>
                        </Box>
                        
                    </HStack>

                    <Flex alignItems={'center'}>
                            {/* <Input w="600px" variant='filled' placeholder='Buscar' /> */}
                            <InputGroup size='md'>
                                <Input
                                    bg='gray.700'
                                    pr='4.5rem'
                                    w="600px"
                                    variant='filled'
                                    placeholder='Buscar Cursos'
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button bg='gray.600' leftIcon={<Search2Icon />} h='1.75rem' size='sm' onClick={() => router.push('/cursos')}></Button>
                                </InputRightElement>
                            </InputGroup>
                    </Flex>

                    <Flex alignItems={'center'}>
                        <IconButton
                            bg="gray.700"
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Ranking'}
                            onClick={() => router.push('/home-page')}
                        >
                            <Icon as={AiOutlineHome} color="white"></Icon>
                        </IconButton>

                        <IconButton
                            bg="gray.700"
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Meus Cursos'}
                            onClick={() => router.push('/meus_cursos')}
                        >
                            <Icon as={AiOutlinePlayCircle} color="white"></Icon>
                        </IconButton>

                        <IconButton
                            bg="gray.700"
                            size={'lg'}
                            mr='1rem'
                            aria-label={'Notificações'}
                            onClick={() => router.push('/minhas-vagas')}
                        >
                            <Icon as={AiOutlineFileText} color="white"></Icon>
                        </IconButton>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    mr="1rem"
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() => router.push('/perfil')}
                                >
                                    Configurações
                                </MenuItem>
                                <MenuItem
                                    onClick={() => router.push('/assinatura')}
                                >
                                    Assinatura
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem onClick={() => router.push('/')}>Sair</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

