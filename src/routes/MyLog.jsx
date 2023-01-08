import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import MoreIcon from '../../assets/MoreIcon';
import CalendarView from '../components/CalendarView';
import TodoItem from '../components/TodoItem';
import axios from 'axios';
import Axios from '../common';
import { format } from 'date-fns';

function MyLog({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [isSelected, setIsSelected] = useState(false);
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [todo, setTodo] = useState({});
  console.log(date)

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        const data = JSON.parse(value);
        console.log(data);
        getData('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiIsImlhdCI6MTY3MzEzNDU5MSwiZXhwIjoxNjgzMTM0NTkxfQ.MnPON0bsFE3Wob2KT3_lTitvjb0-BMyL-FSCRxzDrhM')
        return data
      } else {
        // navigation.navigate('SignIn')
      }
    } catch (e) {
      console.log('??', e.message);
    }
  }

  const getData = (data) => {
    axios.get(`http://118.67.130.242:8080/api/improvement-management/todo/?date=${date}`,{
      headers: {'Authorization': `Bearer ${data}`}
    })
      .then((res) => {
        setTodo(res.data.data)
        console.log('res', res.data.data)
      })
      .catch((error) => {
        console.log('aaa', error)
      })
  }

  useEffect(() => {
    getToken();
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
            {todo.map((e) => (
              <TodoItem checked={!e.done} text={e.title} />
            ))}
            {/* {todo != {}  ? {todo.map((e) => (
              console.log(e)
                <TodoItem checked={!do.done} text={do.title} />
               ))} : null} */}
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