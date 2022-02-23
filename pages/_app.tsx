import { AppProps } from "next/app"
import { ChakraProvider, ColorModeScript, toCSSObject } from '@chakra-ui/react'
import theme from "../theme"

const App = ( {Component, pageProps} : AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
