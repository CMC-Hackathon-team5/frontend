import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import MoreIcon from '../../assets/MoreIcon';
import CalendarView from '../components/CalendarView';
import TodoItem from '../components/TodoItem';

function MyLog({navigation}) {
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <CalendarView />
          <Text style={styles.date}>{year}년 {month}월 {day}일</Text>

          <TodoItem checked text="dummy text !" />
          <TodoItem checked text="dummy text !" />
          <TodoItem checked text="dummy text !" />
          <TodoItem checked text="dummy text !" />
          <TodoItem checked text="dummy text !" />

          <View style={styles.title}>
            <Text style={styles.text}>오늘의 자기 개발 회고</Text>
            <MoreIcon color="#B9B9B9" />
          </View> 
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    paddingHorizontal: 30,
  },
  date: {
    fontSize: 24,
    marginTop: 40,
    fontWeight: "600"
  },
})

export default MyLog;