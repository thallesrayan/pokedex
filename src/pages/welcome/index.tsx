import React from "react";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from "../../assets/img/pikachu.json";
import { Button } from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";



export function Welcome() {
  const {navigate} = useNavigation()
  function handleNavigation(){
    navigate('Home')
  }

  return (
    <S.Container>
      <S.Content>
        <S.WrapperAnimation>
        <S.WrapperImage>
        <AnimatedLottieView style={{width: 400}} autoPlay source={pokemonAnimation} loop/>
        </S.WrapperImage>
        </S.WrapperAnimation>
        <S.Title> Bem Vindo a Pokedex!</S.Title>
        <S.Subtitle>Todos os Pokemons em um só lugar!</S.Subtitle>
      </S.Content>
      <S.Footer>
        <Button title='Iniciar' onPress={handleNavigation}/>
      </S.Footer>
    </S.Container>
  );
}
