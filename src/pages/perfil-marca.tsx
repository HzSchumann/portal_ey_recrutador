import {
    Text,
    Flex,
    Box,
    Icon,
    Heading,
    Button,
    Stack,
    useColorModeValue,
    Grid,
    GridItem,
    Image,
    IconButton,
    Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { LogedHeader } from '../components/logedHeader/index';
import { AiFillInstagram} from "react-icons/ai";


export default function UserProfileEdit(): JSX.Element {
    const router = useRouter();
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
                <GridItem rowSpan={1}>
                    <Center  h='auto' width="auto" boxShadow='xs' rounded='md' bg='white' text-align='center' max-width="200px">
                        <Flex bg="gray">
                            <Image
                                rounded='md'
                                objectFit="cover"
                                boxSize="100%"
                                src={
                                    'https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/12/logo-adidas-2022-pb.jpg'
                                }
                            />
                        </Flex>
                    </Center >
                    <Box>
                        <Flex>
                            <Heading>Adidas</Heading>
                        </Flex>
                        <Flex>
                            <Box display="flex">
                                <Icon mt="2px" as={AiFillInstagram} w={5} h={5} mr="4px" color="bluePrimary.500"></Icon>
                                <Text>@adidas</Text>
                            </Box>
                        </Flex>
                    </Box>
                </GridItem>

                <GridItem colSpan={4}>

                    <Box height="auto" boxShadow='xs' rounded='md' p="2rem">
                        <Heading size='sm' mb="1rem">Sobre a empresa:</Heading>
                        <Text>
                            Minions ipsum baboiii jeje tatata bala tu. Baboiii poulet tikka masala butt belloo! Daa. La bodaaa tank yuuu! Jiji poulet tikka masala bananaaaa underweaaar. La bodaaa bappleees chasy potatoooo me want bananaaa! Bananaaaa po kass jeje hana dul sae tulaliloo para tú belloo! Gelatooo potatoooo hahaha. Hana dul sae daa tank yuuu! Poopayee baboiii aaaaaah. Butt potatoooo pepete bananaaaa hahaha bananaaaa hana dul sae poopayee me want bananaaa! Tatata bala tu tatata bala tu butt me want bananaaa! Wiiiii tatata bala tu. Potatoooo tank yuuu! Butt bananaaaa tulaliloo.

                            Butt chasy me want bananaaa! Jeje pepete tulaliloo. Ti aamoo! gelatooo pepete jeje jiji. Bappleees underweaaar wiiiii aaaaaah. Bananaaaa me want bananaaa! Daa bananaaaa. Aaaaaah wiiiii la bodaaa baboiii ti aamoo! Butt po kass para tú bappleees. Hana dul sae jeje tank yuuu! La bodaaa me want bananaaa! Me want bananaaa! Bee do bee do bee do. Para tú uuuhhh uuuhhh poopayee poulet tikka masala la bodaaa.
                        </Text>
                    </Box>

                    <Box>
                    <Stack
                alignItems={'center'}
                justifyContent={'center'}
                >

                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        >
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
                    </Box>
                </GridItem>
            </Grid>

        </>
    );
}