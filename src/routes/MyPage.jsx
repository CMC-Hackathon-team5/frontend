import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import Carrot100 from '../../assets/Carrot100';
import Rabbit from '../../assets/Rabbit';
import TodoItem from '../components/TodoItem';

function MyPage({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>마이페이지</Text>
        <View style={styles.carrot}>
          <Carrot100 />
        </View>
        <TodoItem text="프로필" navigation={() => navigation.navigate('Profile')} />
        <TodoItem text="친구 목록" navigation={() => navigation.navigate('Friends')} />
        <View style={styles.rabbit}>
          <Rabbit />
        </View>
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
    flex: 1,
    paddingHorizontal: 30,
    position: 'relative'
  },
  text: {
    fontSize: 24,
    marginTop: 45,
    fontWeight: "600"
  },
  rabbit: {
    position: 'absolute',
    bottom: 46,
    right: 47
  },
  carrot: {
    position: 'absolute',
    top: 50,
    right: 47
  }
})

export default MyPage;