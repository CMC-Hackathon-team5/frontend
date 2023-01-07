import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import PlusIcon from '../../assets/PlusIcon';
import SelectItem from '../components/SelectItem';
import TodoItem from '../components/TodoItem';

function MyPage({navigation}) {
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth() + 1
  const day = date.getDate()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.date}>{year}년 {month}월 {day}일</Text>

        <Text style={styles.title}>오늘의 자기 개발을 추가해보세요!</Text>
        <SelectItem />

        <View style={styles.direction}>
          <Text style={styles.title}>오늘의 예정 자기 계발</Text >
          <PlusIcon style={{marginTop: 30}} />
        </View>
        <TodoItem />

        {/* <Button style={{ padding: 10}} title="button" onPress={() => {
          console.log('press')
          navigation.navigate('Test')
          }}>
        </Button> */}
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

export default MyPage;