import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable } from 'react-native';
import Axios from '../common';
import BackButton from '../components/BackButton';
import TodoItem from '../components/TodoItem';

function AddTodo({navigation}) {
  const [list, setList] = useState([])

  const getData = async () => {
    try {
      const response = await Axios.get('/api/improvement-management/improvement/list')
      console.log(response.data.data)
      setList(response.data.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <BackButton navigation={navigation} />
        <Text style={styles.title}>자기 계발을 추가해보세요!</Text>
        {list.map((ele, idx) => <React.Fragment key={idx}>
          <TodoItem text={ele.title} add />
        </React.Fragment>)}
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
  }
})

export default AddTodo;