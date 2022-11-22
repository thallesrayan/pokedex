import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundDefault};
    
  `}
`;

export const Header = styled.ImageBackground`
${({theme}) => css`
  width: ${windowWidth}px;
  height: 220px;
  background-color: ${theme.colors.backgroundDefault}
  margin-left: -20px;
`}
`;

export const Title = styled.Text`
${({theme}) => css`
  font-size: 32px;
  line-height: 38px;
  font-weight: bold;
  color: black;
`}
`;

export const SubTitle = styled.Text`
${({theme}) => css`
  font-size: 16px;
  line-height: 38px;
  font-weight: bold;
  color: grey;
`}
`

export const SearchContainer = styled.View`
  ${({ theme }) => css`
  width: 100%;
  height: 60px;
  marginVertical: 15px;
  paddingLeft: 0px;
  border-radius: 10px;
  background-color: ${theme.colors.input};
    
  `}
`;

export const SearchIcon = styled.Image`
${({theme}) => css`
  padding: 10px;
  top: -40px;
  width: 21px;
  height: 21px;
  left: 10px;
  background-color: ${theme.colors.input}
  
`}
`;
