import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import MoreIcon from '../../assets/MoreIcon';
import CalendarView from '../components/CalendarView';
import TodoItem from '../components/TodoItem';
import axios from 'axios';
import Axios from '../common';

function MyLog({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const getData = async () => {
    // console.log(selectedDate)
    // const response = await Axios.get(`/api/improvement-management/todo/?date=${'2023-01-27'}`);
    // console.log(response);
  }

  useEffect(() => {
   getData()
    // axios({
    //   headers: {
    //     withCredentials: true,
    //     "Access-Control-Allow-Origin": "http://localhost:3000",
    //     'Accept': 'application/json',
    //   },
    //   method: 'get',
    //   url: `http://gcpeter.shop:8080/api/improvement-management/todo`,
    //   params: {
    //     date: '2023-01-27'
    //   }
    // }).then((res) => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // })
  }, [selectedDate])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <CalendarView setSelectedDate={setSelectedDate} selectedDate={selectedDate} setIsSelected={setIsSelected}/>

          {isSelected && <>
            <Text style={styles.date}>{selectedDate}</Text>

            <TodoItem checked text="dummy text !" />
            <TodoItem checked text="dummy text !" />
            <TodoItem checked text="dummy text !" />
            <TodoItem checked text="dummy text !" />
            <TodoItem checked text="dummy text !" />
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