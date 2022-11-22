
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Search from '../../assets/icons/search.png'
import * as S from './styles'


const Input = ({...props}) => {
  return (
    <View>
     
      <S.TextInput  {...props} />
      </View>
  );
};

export default Input;
