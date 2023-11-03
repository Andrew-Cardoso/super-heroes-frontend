import { useContext, useEffect, useState } from "react";
import { Flex, Input } from "@chakra-ui/react";
import { createPortal } from "react-dom";
import { HeroesContext } from "../../contexts/heroes/heroes.context";
import { HeroCard } from "./HeroCard";

export const Home = () => {
  const { filteredHeroes, search, setSearch } = useContext(HeroesContext);
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  return (
    <>
      <Flex flexWrap="wrap" gap="12px" justifyContent="center">
        {filteredHeroes.map((hero) => (
          <HeroCard key={hero.heroId} hero={hero} />
        ))}
      </Flex>
      {isDomReady &&
        createPortal(
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />,
          document.getElementById("box-header")!
        )}
    </>
  );
};
