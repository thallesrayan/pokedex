import styled, { css } from "styled-components/native";

interface PokemonType {
  type: string;
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    paddind: 20px;
    height: 130px;
  `}
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const ImgCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: 7px;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    padding: 10px;
    margin-left: 10px;
    top: 10px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    margin-top: -15px;
    text-transform: capitalize;
    padding: 20px;
    color: ${theme.colors.text_white};
  `}
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: -7px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.boxType[type]};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: ${theme.colors.text_white};
  `}
`;

export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const PokemonImage = styled.Image`
  margin-top: -40px;
  width: 130px;
  height: 130px;
`;

export const PokeballDatail = styled.Image`
  position: absolute;
  right: -4px;
`;
