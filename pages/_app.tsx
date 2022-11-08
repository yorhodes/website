import { Analytics } from '@vercel/analytics/react';
import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import theme from "../theme"

const App = ( {Component, pageProps} : AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <title>Yorke Rhodes - Developer</title>
      <Component {...pageProps} />
      <Analytics/>
    </ChakraProvider>
  )
}

export default App
