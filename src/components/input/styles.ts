import styled, { css } from "styled-components/native";

export const TextInput = styled.TextInput`
  ${({ theme }) => css`
    width: 90%;
    height: 60px;
    left: 40px;
    align-items: center;
    justifify-content: center;
    border-radius: 10px;
    background-color: ${theme.colors.input};
  `}
`;
