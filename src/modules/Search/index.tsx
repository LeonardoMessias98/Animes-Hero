import React, { useState } from "react";
import SliderCard from "shared/components/organisms/CarouselSlider/components/SliderCard";
import { IAnime } from "shared/dto";

import useDebounce from "shared/hooks/useDebounce";
import { api } from "shared/utils/api";

import { Container, Input } from "./styles";

const Search = () => {
  const debouncedChange = useDebounce();
  const [results, setResults] = useState<IAnime[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const searchAnimes = async (search: string) => {
    try {
      const response = await api.get(`/anime?filter[text]=${search}`);

      setResults(response.data.data);
    } catch (error) {
      setResults([]);
    }
  };

  const handleSearch = (e: any) => {
    const search = e.target.value;

    if (search.length > 2) {
      debouncedChange(searchAnimes, 500, search);
      setIsSearching(true);
    }
  };
  return (
    <Container>
      <Input onChange={handleSearch} placeholder="Pesquise por animes..." />

      {isSearching && (
        <>
          <h2>Resultados</h2>
          <div className="results">
            {results.map((result) => (
              <SliderCard data={result} key={result.id} />
            ))}
          </div>
        </>
      )}
    </Container>
  );
};

export default Search;
