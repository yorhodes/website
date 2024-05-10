import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: '#aaa'
  },
  styles: {
    global: {
      button: {
        shadow: "base",
        rounded: "md"
      },
    },
  },
});

export default theme;
