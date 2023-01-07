import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, ScrollView, Alert } from 'react-native';
import Axios from '../common';
import BackButton from '../components/BackButton';
import TodoItem from '../components/TodoItem';

function AddTodo({navigation}) {
  const [list, setList] = useState([])
  const [todoText, setTodoText] = useState('')

  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate()
  
  const getData = async () => {
    try {
      const response = await Axios.get(`/api/improvement-management/improvement/list`)
      setList(response.data.data)
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  const onPress = async () => {
    setList(ele => ele.concat({title: todoText, done: false}))
    try {
      const response = await Axios.post('/api/improvement-management/todo', {
        title: todoText,
        date: `${year}-${month}-${day}`,
      })
      Alert.alert(
        "",
        `할일 [${todoText}]가 추가되었습니다`,
        [{ text: "확인"}]
      );
    } catch (error) {
      console.error('getDateTodo', error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <BackButton navigation={navigation} />
          <Text style={styles.title}>자기 계발을 추가해보세요!</Text>
          <TodoItem onSubmit={onPress} value={todoText} onChange={setTodoText} placeholder checked /> 
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