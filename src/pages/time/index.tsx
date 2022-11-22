import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Pokemon, pokemonType } from "../../components/card";
import api from "../../service/api";
import pokeballHeader from "../../assets/img/pokeball.png";
import { useNavigation } from "@react-navigation/native";
import Search from "../../assets/icons/search.png";
import Input from "../../components/input";
import * as S from "./styles";
import { Button } from "../../components/button";
import { textSpanContainsPosition } from "typescript";

type Request = {
  id: number;
  types: pokemonType[];
};

export function Time() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [originalData, setOriginalData] = useState<Pokemon[]>([]);

  const { navigate } = useNavigation();
  function handleNavigation(pokemonId: number) {
    navigate("About", {
      pokemonId,
    });
  }

  useEffect(() => {
    async function getAllPokemons() {
      const response = await api.get(`pokemon?limit=5&offset=20`);
      const { results } = response.data;
      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);
          return {
            name: pokemon.name,
            id,
            types,
          };
        })
      );
      setPokemons(payloadPokemons);
      setOriginalData(payloadPokemons);
    }

    getAllPokemons();
  }, []);

  async function getMoreInfo(url: string): Promise<Request> {
    const response = await api.get(url);
    const { id, types } = response.data;
    return {
      id,
      types,
    };
  }

  function search(s) {
    let arr = JSON.parse(JSON.stringify(originalData));
    arr.filter;
    setPokemons(arr.filter((d) => d.name.includes(s)));
  }

  return (
    <S.Container>
      <FlatList
        ListHeaderComponent={
          <>
            <S.Header source={pokeballHeader} />
            <S.Title>Time</S.Title>
            <S.SubTitle>Seu time contém 5 pokémons.</S.SubTitle>
            <S.SearchContainer>
              <Input
                placeholder="       Por qual pokemon você está procurando?"
                onChangeText={(s) => search(s)}
                autoCapitalize="none"
              />
              <S.SearchIcon source={Search} />
            </S.SearchContainer>
          </>
        }
        contentContainerStyle={{
          padding: 20,
        }}
        data={pokemons}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        renderItem={({ item: pokemon }) => (
          <Card
            data={pokemon}
            onPress={() => {
              handleNavigation(pokemon.id);
            }}
          />
        )}
      />
    </S.Container>
  );
}
