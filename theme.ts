import { extendTheme, withDefaultColorScheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      button: {
        shadow: "base",
        _hover: {
          // transform: "scale(1.01)",
          // filter: "drop-shadow(1px 1px 0 gray)",
          shadow: "inner",
        },
        // filter: "drop-shadow(3px 3px 0 gray)",
        rounded: "md"
      },
    },
  },
});

export default theme;
