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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: "https://www.yorke.dev/",
    mainEntity: {
      "@type": "Person",
      name: bio.name,
      url: "https://www.yorke.dev/",
      image: "https://www.yorke.dev/headshot.webp",
      jobTitle: "Distributed Systems Engineer and Technical Leader",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Rice University",
      },
      sameAs: [
        "https://github.com/yorhodes",
        "https://linkedin.com/in/yorke-rhodes-iv/",
        "https://twitter.com/0xyorke",
      ],
      knowsAbout: [
        "Distributed systems",
        "Developer infrastructure",
        "Formal methods",
        "Protocol engineering",
        "Technical leadership",
      ],
    },
  };

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Yorke Rhodes IV" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.yorke.dev/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${bio.name}, Distributed Systems Engineer and Technical Leader`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.yorke.dev/og-image.png" />
        <meta name="twitter:image:alt" content={`${bio.name}, Distributed Systems Engineer and Technical Leader`} />
        {router.pathname === "/" && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
          />
        )}
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
