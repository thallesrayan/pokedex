import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${theme.colors.welcomeButton};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.colors.text_white};
  `}
`;
