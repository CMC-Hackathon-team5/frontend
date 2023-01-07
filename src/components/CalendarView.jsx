import React, { useState } from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { format, startOfMonth } from 'date-fns';
import CalenderMain from './CalenderMain';

function CalendarView() {
  const date = new Date();
  const [currYear, setCurrYear] = useState(date.getFullYear())
  const [currMonth, setCurrMonth] = useState(date.getMonth()+1)
  const [selectedDate, setSelectedDate] = useState(
    format(date, "yyyy년 MM월 dd일")
  );
  const [isSelected, setIsSelected] = useState(false);
  const days = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button style={styles.arrow} title="<" color='#FFB44E'/>
        <Text style={styles.month}>{currYear}년 {currMonth}월</Text>
        <Button style={styles.arrow} title=">" color='#FFB44E'/>
      </View>
      <View style={styles.days}>
        {days.map((d) => (
          <Text style={styles.day}>{d}</Text>
        ))}
      </View>
      <CalenderMain currMonth={currMonth} selectedDate={selectedDate}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    marginHorizontal: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  month: {
    fontSize: 26,
    textAlign: 'center'
  },
  arrow: {
   
  },
  days: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  day: {
    color: '#000000'
  }
});

export default CalendarView;