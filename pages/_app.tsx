import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChakraProvider, Container, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion } from "framer-motion";
import theme from "../theme";

import Navbar from "../components/navbar";

import navbar from "../data/navbar.json";
import bio from "../data/bio.json";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const prefersReducedMotion = usePrefersReducedMotion();
  const pageNames: Record<string, string> = {
    "/experience": "Experience",
    "/writing": "Writing",
    "/talks": "Talks",
  };
  const homeTitle = "Yorke Rhodes IV | Distributed Systems Engineer & Technical Leader";
  const pageTitle = pageNames[router.pathname]
    ? `${pageNames[router.pathname]} | Yorke Rhodes IV`
    : homeTitle;
  const description = "Distributed systems engineer and technical leader building secure infrastructure, developer tools, and high-reliability systems.";
  const canonicalUrl = `https://www.yorke.dev${router.asPath.split("?")[0]}`;

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.yorke.dev/headshot.jpeg" />
        <meta property="og:image:alt" content={bio.name} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.yorke.dev/headshot.jpeg" />
      </Head>
      <Container marginBottom="5">
        {Navbar(navbar)}
        <motion.main
          key={router.pathname}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.15, ease: "easeOut" }}
        >
          <Component {...pageProps} />
        </motion.main>
      </Container>
      <Analytics />
    </ChakraProvider>
  );
};

export default App;
