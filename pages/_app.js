import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import customTheme from '../styles/themes'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
      options={{
        initialColorMode: "light",
        useSystemColorMode: true,
      }}>
      <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
