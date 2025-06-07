import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Navbar from "../components/navbar";
import Edit from "../components/edit";

import navbar from "../data/navbar.json";
import bio from "../data/bio.json";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <title>{`${bio.name} - Developer`}</title>
      <div className="container mx-auto mb-5 px-4">
        {Navbar(navbar)}
        <Component {...pageProps} />
        {Edit()}
      </div>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
