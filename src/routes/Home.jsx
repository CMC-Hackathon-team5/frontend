import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import PlusIcon from '../../assets/PlusIcon';
import TodoItem from '../components/TodoItem';

function Home({navigation}) {
  const [list, setList] = useState([])

  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate()

  const goAddTodo = () => {
    navigation.navigate('AddTodo')
  }

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
        {list.length > 0 ? <TodoItem text="dummy text" checked /> 
        : <>
          <TodoItem text="자기 개발 추가하기" navigation={navigation} /> 
          <TodoItem placeholder checked /> 
          <Text style={styles.noList}>
            오늘은 예정된 자기 개발이 없어요.{"\n"}
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