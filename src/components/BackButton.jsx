import {Pressable } from 'react-native';
import React from 'react';
import BackButtonIcon from '../../assets/BackButtonIcon';

const BackButton = ({navigation}) => {
  return (    
    <Pressable onPress={() => navigation.pop()}>
      <BackButtonIcon />
    </Pressable>
  )
} 

export default BackButton