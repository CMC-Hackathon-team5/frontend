import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import MoreIcon from '../../assets/MoreIcon';
import CalendarView from '../components/CalendarView';
import TodoItem from '../components/TodoItem';
import axios from 'axios';
import Axios from '../common';
import {todoDummy} from '../data/todoDummy';

function MyLog({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [date, setDate] = useState("");
  const [todo, setTodo] = useState({});

  useEffect(() => {
    let obj = todoDummy.filter((e) => e.date.includes(date))
    setTodo(obj)
  }, [selectedDate])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <CalendarView 
            setSelectedDate={setSelectedDate} 
            selectedDate={selectedDate} 
            setIsSelected={setIsSelected}
            setDate={setDate}
          />

          {isSelected && <>
            <Text style={styles.date}>{selectedDate}</Text>

            {todo.map((todo) => (
                <TodoItem checked={!todo.done} text={todo.title} />
            ))}
          </>}

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