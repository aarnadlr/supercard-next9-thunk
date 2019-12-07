import { theme } from "@chakra-ui/core";

// CSS-in-JS API INFO: https://styled-system.com/table/
// DEFAULT COLORS INFO: https://chakra-ui.com/theme#colors

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    march:'green',
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    red:{
      400:'red'
    }
  },
};

export default customTheme;
