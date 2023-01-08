import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, ScrollView, Alert } from 'react-native';
import Axios from '../common';
import BackButton from '../components/BackButton';
import TodoItem from '../components/TodoItem';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

function AddTodo({navigation}) {
  const [list, setList] = useState([])
  const [todoText, setTodoText] = useState('')
  const [token, setToken] = useState('')

  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate()
  
  const getData = async (data) => {
    try {
      const response = await axios.get(`http://118.67.130.242:8080/api/improvement-management/improvement/list`, {
        headers: {
          'Authorization': `Bearer ${data}`
        }
      })
      setList(response.data.data)
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  const onPress = async (ele) => {
    try {
      const response = await axios.post('http://118.67.130.242:8080/api/improvement-management/todo', {
        title: ele.title,
        date: `${year}-0${month}-0${day}`
      }, {
        headers: {'Authorization': `Bearer ${token}`}
      })
      Alert.alert(
        "",
        `할일 [${ele.title}]가 추가되었습니다`,
        [{ text: "확인"}]
      );
      setList(ele => ele.concat(response.data.data))
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  const onSubmit = async () => {
    try {
      const response = await axios.post('http://118.67.130.242:8080/api/improvement-management/todo', {
        title: todoText,
        date: `${year}-0${month}-0${day}`
      }, {
        headers: {'Authorization': `Bearer ${token}`}
      })
      Alert.alert(
        "",
        `할일 [${todoText}]가 추가되었습니다`,
        [{ text: "확인"}]
        );
        setList(ele => ele.concat(response.data.data))
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  useEffect(() => {
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          const data = JSON.parse(value);
          setToken(data)
          getData(data)
        } 
        } catch (e) {
          console.log(e.message);
        }
      }
    getToken()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>자기 계발을 추가해보세요!</Text>
          <TodoItem onSubmit={onSubmit} value={todoText} onChange={setTodoText} placeholder checked /> 
          {list.map((ele, idx) => <React.Fragment key={idx}>
            <TodoItem onPress={() => onPress(ele)} text={ele.title} add />
          </React.Fragment>)}
        </View>
      </ScrollView>
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
  }
})

export default AddTodo;