import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, Button } from 'react-native';
import PlusIcon from '../../assets/PlusIcon';
import Axios, {getData, getDateFunc, getMovies, removeData, storeData} from '../common';
import TodoItem from '../components/TodoItem';
import axios from 'axios'
import {getToken} from '../common'
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home({navigation}) {
  const [list, setList] = useState([])
  const [todoText, setTodoText] = useState('')

  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate()

  const goAddTodo = () => {
    navigation.navigate('AddTodo')
  }

  const getDateTodo = async () => {
    try {
      const response = await Axios.get(`/api/improvement-management/todo?date=${year}-${month}-${day}`)
      console.log('getDateTodo', response.data)
      setList(response.data)
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  const onSubmit = async () => {
    setList(ele => ele.concat({title: todoText, done: false}))
    try {
      const response = await Axios.post('/api/improvement-management/todo', {
        title: todoText,
        date: `${year}-${month}-${day}`,
      })
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        console.log('토큰 가져오기 ', value);
        if (value !== null) {
          const data = JSON.parse(value);
          return data
        } else {
          navigation.navigate('SignIn')
        }
        } catch (e) {
          console.log(e.message);
        }
      }
      getToken()
      getDateTodo()
    }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.date}>{year}년 {month}월 {day}일</Text>
        <View style={styles.direction}>
          <Text style={styles.title}>오늘의 예정 자기 계발</Text >
          <Pressable onPress={goAddTodo}>
            <PlusIcon style={{marginTop: 30}} />
          </Pressable>
        </View>
        {list.length > 0 ? <>
          {list.map((ele, idx) => 
          <React.Fragment key={idx}>
            <TodoItem text={ele.title} checked done={ele.done} />
          </React.Fragment>
          ) }
        </>
        : <>
          <TodoItem text="자기 계발 추가하기" navigation={() => navigation.navigate('AddTodo')} /> 
          <TodoItem onSubmit={onSubmit} value={todoText} onChange={setTodoText} placeholder checked /> 
          <Text style={styles.noList}>
            오늘은 예정된 자기 계발이 없어요.{"\n"}
            버튼을 눌러 반짝이는 3시간을 만들어볼까요?
          </Text>
        </>
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  noList: {
    textAlign: 'center',
    color: "#B9B9B9",
    fontSize: 16,
    marginTop: 40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view: {
    paddingHorizontal: 30,
  },
  direction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: 24,
    marginTop: 45,
    fontWeight: "600"
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
  }
})

export default Home;