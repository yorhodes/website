import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      "chakra-body-bg": {
        _light: "#FFFFFF",
        _dark: "#20242A",
      },
      "chakra-body-text": {
        _light: "#000000",
        _dark: "#F1F3F5",
      },
    },
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: '#aaa'
  },
  styles: {
    global: {
      html: {
        scrollbarGutter: "stable",
      },
      body: {
        transition: "background-color 200ms ease, color 200ms ease",
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
        },
      },
      button: {
        shadow: "none",
        rounded: "md"
      },
    },
  },
});

export default theme;
