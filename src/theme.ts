import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        width: "100vw",
        height: "100vh",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        overflow: "hidden",
      },
    },
  },
});
