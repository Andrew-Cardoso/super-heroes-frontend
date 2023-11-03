import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes } from "./routes";
import { theme } from "./theme";
import { HeroesProvider } from "./contexts/heroes/heroes.context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HeroesProvider>
        <Routes />
      </HeroesProvider>
    </ChakraProvider>
  </React.StrictMode>
);
