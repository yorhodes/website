import { Analytics } from '@vercel/analytics/react';
import { AppProps } from "next/app"
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from "../theme"

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import navbar from "../data/navbar.json";

const App = ( {Component, pageProps} : AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <title>Yorke Rhodes - Developer</title>
      <Container>
        {Navbar(navbar)}
        <Component {...pageProps} />
        <Footer/>
      </Container>
      <Analytics/>
    </ChakraProvider>
  )
}

export default App
