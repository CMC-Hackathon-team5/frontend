import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import Rabbit from '../../assets/Rabbit';
import TodoItem from '../components/TodoItem';

function Friends({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>친구 목록</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 24,
    marginTop: 45,
    fontWeight: "600"
  }
})

export default Friends;