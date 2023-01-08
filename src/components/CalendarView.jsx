import React, { useState } from 'react'
import { Button, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { addMonths, format, startOfMonth, subMonths } from 'date-fns';
import CalenderMain from './CalenderMain';
import ArrowRight from '../../assets/ArrowRight';

function CalendarView({setSelectedDate, selectedDate, setIsSelected, setDate}) {
  const [currDate, setCurrDate] = useState(new Date())
  const days = ['일', '월', '화', '수', '목', '금', '토']

  const prevMonth = () => {
    setCurrDate(subMonths(currDate, 1));
  }
  const nextMonth = () => {
    setCurrDate(addMonths(currDate, 1));
  }

  return (
    <>
      <View style={styles.header}>
        <Pressable hitSlop={10} style={[styles.arrow, {transform: [{rotate: '180deg'}]}]} onPress={prevMonth}>
          <ArrowRight color='#FFB44E' />
        </Pressable>
        <Text style={styles.month}>{format(currDate, 'yyyy')}년 {format(currDate, 'M')}월</Text>
        <Pressable hitSlop={10} style={styles.arrow} onPress={nextMonth}>
          <ArrowRight color='#FFB44E' />
        </Pressable>
      </View>
      <View style={styles.days}>
        {days.map((d, i) => (
          <Text key={i} style={dayStyles(d).day}>{d}</Text>
          ))}
      </View>
      <CalenderMain 
        currDate={currDate}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        setIsSelected={setIsSelected}
        setDate={setDate}
        />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10
  },
  month: {
    fontSize: 16,
    textAlign: 'center',
  },
  days: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  
});

const dayStyles = (d) => StyleSheet.create({
  day: {
    color: d === '일' ? 'red' : d === '토' ? 'blue': '#000000'
  }
});

export default CalendarView;