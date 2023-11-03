import { createContext, useEffect, useMemo, useState } from "react";
import { Hero } from "../../shared/types/hero";
import { useApi } from "../../shared/hooks/api.hook";

interface HeroesContextProps {
  heroes: Hero[];
  filteredHeroes: Hero[];
  search: string;
  setSearch: (value?: string) => void;
}

export const HeroesContext = createContext<HeroesContextProps>({
  heroes: [],
  filteredHeroes: [],
  search: "",
  setSearch: () => {},
});

interface Props {
  children: React.ReactNode;
}
export const HeroesProvider = ({ children }: Props) => {
  const api = useApi();
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [searchString, setSearchString] = useState("");

  const setSearch = (search = "") => {
    setSearchString(search);
  };

  const getHeroes = async () => {
    const result = await api.get<Hero[]>("/heroes");
    if (result.success) {
      setHeroes(result.data);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const filteredHeroes = useMemo(
    () =>
      heroes.filter((hero) =>
        hero.name.toLowerCase().includes(searchString.toLowerCase())
      ),
    [heroes, searchString]
  );

  return (
    <HeroesContext.Provider
      value={{
        heroes,
        filteredHeroes,
        setSearch,
        search: searchString,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
