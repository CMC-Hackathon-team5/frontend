import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, Button, ScrollView } from 'react-native';
import PlusIcon from '../../assets/PlusIcon';
import TodoItem from '../components/TodoItem';
import axios from 'axios'
import {getToken} from '../common'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';

function Home({navigation}) {
  const [list, setList] = useState([])
  const [todoText, setTodoText] = useState('')
  const [token, setToken] = useState('')
  const isFocused = useIsFocused();

  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate()

  const goAddTodo = () => {
    navigation.navigate('AddTodo')
  }

  const getDateTodo = async (data) => {
    try {
      const response = await axios.get(`http://118.67.130.242:8080/api/improvement-management/todo?date=${year}-${month}-${day}`,
      {headers: {
        'Authorization': `Bearer ${data}`
      }})
      setList(response.data.data)
      console.log(response.data.data);
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  const onSubmit = async () => {
    setList(ele => ele.concat({title: todoText, done: false}))
    try {
      const response = await axios.post('http://118.67.130.242:8080/api/improvement-management/todo', {
        title: todoText,
        date: `${year}-${month}-${day}`
      }, {headers: {
        'Authorization': `Bearer ${token}`
      }})
      console.log('onsubmit', response);
    } catch (error) {
      console.error('onSubmit', error);
    }
  }

  useEffect(() => {
    // const removeData = async () => {
    //   try {
    //     await AsyncStorage.removeItem('token');
    //   } catch (e) {
    //     console.error(e.message);
    //   }
    // };
    // removeData()
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          const data = JSON.parse(value);
          console.log('home', data);
          getDateTodo(data)
          setToken(data)
        } else {
          navigation.navigate('SignIn')
        }
        } catch (e) {
          console.log(e.message);
        }
      }
      getToken()
    }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            <TodoItem token={token} date={`${year}-0${month}-0${day}`} text={ele.title} checked done={ele.done} />
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
      </ScrollView>
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