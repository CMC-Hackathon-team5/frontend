import { View, Text, SafeAreaView, StyleSheet, Dimensions, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addDays, endOfMonth, endOfWeek, format, isSameMonth, parse, startOfMonth, startOfWeek } from 'date-fns'
import Carrot100 from '../../assets/Carrot100'
import Carrot80 from '../../assets/Carrot80'
import Carrot20 from '../../assets/Carrot20'
import Carrot40 from '../../assets/Carrot40'
import Carrot60 from '../../assets/Carrot60'
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

function CalenderMain({ currDate, setSelectedDate, setIsSelected, selectedDate, setDate }) {
  const date = format(currDate, 'yyyy-MM-dd');
  const monthStart = startOfMonth(currDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const dayWrapWidth = Math.floor(Dimensions.get('window').width / 8);

  const year = format(currDate, 'yyyy')
  const month = format(currDate, 'M')

  const [perObj, setPerObj] = useState({});

  const rows = [];
  let days = [];
  let day = startDate;
  let formattendDate = '';

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        const data = JSON.parse(value);
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
    axios.get(`http://118.67.130.242:8080/api/improvement-management/todo/month?date=${date}`, {
      headers: {'Authorization': `Bearer ${data}`,  'Content-Type' : 'application/json',}
    }).then((res) => {
        setPerObj(res.data.data)
      })
      .catch((error) => {
        console.log('aaaaaaa', error)
      })
  }

  useEffect(() => {
    getToken();
  }, [month])


  const onClickedDate = (cloneDay) => {
    setDate(format(cloneDay, 'yyyy-MM-dd'));
    setSelectedDate(format(cloneDay, 'yyyy년 MM월 dd일'));
    setIsSelected(true);
  }

  const carrotIcon = (per) => {
    if (per == 0) {
      return false;
    } else if (per <= 20) {
      return <Carrot20 />
    } else if (per <= 40) {
      return <Carrot40 />
    } else if (per <= 60) {
      return <Carrot60 />
    } else if (per <= 80) {
      return <Carrot80 />
    } else if (per <= 100) {
      return <Carrot100 />
    }
  }
  console.log(perObj)
  while (day <= endDate) {

    for (let i = 0; i < 7; i++) {
      formattendDate = format(day, 'd')
      const cloneDay = day;
      let state = isSameMonth(day, monthStart)
      let dateStr = format(cloneDay, 'yyyy-MM-dd');
      let obj = perObj.find((e) => e.date === dateStr)

      days.push(
        <Pressable
          style={dayStyles(dayWrapWidth, state).dayWrap}
          key={day}
          onPress={() => {
            onClickedDate(cloneDay)
          }}
        >
          <Text style={styles(state).day}>{formattendDate}</Text>
          {(obj !== undefined) && carrotIcon(obj.percent)}
        </Pressable>
      )
      day = addDays(day, 1);
    }
    rows.push(
      <View style={style.week} key={day}>{days}</View>
    )
    days = [];
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.rows}>
        {rows}
      </View>
    </SafeAreaView>
  )
}

export default CalenderMain;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  week: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
})

const styles = (state) => StyleSheet.create({
  day: {
    color: state ? '#000000' : '#807f7f',
  },
});

const dayStyles = (dayWrapWidth, state) => StyleSheet.create({
  dayWrap: {
    width: dayWrapWidth,
    height: dayWrapWidth,
    backgroundColor: state ? '#cccccc' : '#e3e2e2',
    opacity: state ? 0.9 : 0.7,
    borderRadius: 10
  },
});