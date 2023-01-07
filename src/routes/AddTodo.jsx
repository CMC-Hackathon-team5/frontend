import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import ArrowRight from '../../assets/ArrowRight';
import TodoItem from '../components/TodoItem';

function AddTodo({navigation}) {
  const BackButton = (
    <Pressable onPress={() => navigation.pop()}>
      <ArrowRight style={styles.button} />
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {BackButton}
        <Text style={styles.title}>자기 개발을 추가해보세요!</Text>
        <TodoItem text="dummy todo" add />
        <TodoItem placeholder checked /> 
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
    paddingTop: 3
  },
  title: {
    fontSize: 24,
    marginTop: 42,
    fontWeight: "600"
  },
  button: {
    transform: [{ rotate: "180deg" }]
  }
})

export default AddTodo;