import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';
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
  const [todo, setTodo] = useState([]);
  const [diary, setDiary] = useState({})

  const [writeDiary, setWriteDiary] = useState("");

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
    axios.get(`http://118.67.130.242:8080/api/improvement-management/todo/?date=${date}`, {
      headers: { 'Authorization': `Bearer ${data}` }
    })
      .then((res) => {
        setTodo(res.data.data)
      })
      .catch((error) => {
        console.log('aaa', error)
      })

    axios.get(`http://118.67.130.242:8080/api/diary/day/?date=${date}`, {
      headers: { 'Authorization': `Bearer ${data}` }
    })
      .then((res) => {
        setDiary(res.data.data)
        console.log('res', res.data.data)
      })
      .catch((error) => {
        setDiary({});
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
            {todo.map((e, i) => (
              <React.Fragment key={i}>
                <TodoItem checked done={e.done} text={e.title} />
              </React.Fragment>
            ))}
          </>}

          <View style={styles.title}>
            <Text style={styles.text}>오늘의 자기 개발 회고</Text>
            <MoreIcon color="#B9B9B9" />
          </View>
          {Object.keys(diary).length > 0 ? <View style={styles.inputWrap}>
            <Text>{diary.content}</Text>
          </View>
          :  <TextInput style={styles.inputWrap} value={writeDiary} onChange={(e) => {
            setWriteDiary(e.nativeEvent.text)
          }} />
          }
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
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    paddingHorizontal: 30,
    paddingTop: 30
  },
  date: {
    fontSize: 24,
    marginTop: 40,
    fontWeight: "600"
  },
  inputWrap: {
    paddingVertical: 18,
    paddingHorizontal: 22,
    borderRadius: 20,
    borderColor: '#B9B9B9',
    borderWidth: 1,
    fontSize: 16,
    color: 'black',
    backgroundColor: '#FFFFFF',
  }
})

export default MyLog;