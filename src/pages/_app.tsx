import { AppProps } from '../../node_modules/next/app'
import { Header } from '../components/Header/index'
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/global.scss'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider> 
  )
}

export default MyApp
