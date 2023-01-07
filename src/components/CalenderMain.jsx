import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { addDays, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek } from 'date-fns'

function CalenderMain({ currMonth, selectedDate }) {
  const monthStart = startOfMonth(currMonth)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const dayWrapWidth = Math.floor(Dimensions.get('window').width/7);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattendDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattendDate = format(day, 'd')
      const cloneDay = day;
      let state = isSameMonth(day, monthStart)
      days.push(
        <View
          style={styles(dayWrapWidth, state).dayWrap}
          key={day}
        >
          <Text style={styles.day}>{formattendDate}</Text></View>
      )
      day = addDays(day, 1);
    }
    rows.push(
      <View style={styles.week}>{days}</View>
    )
    days = [];
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rows}>
        {rows}
      </View>
    </SafeAreaView>

  )
}

export default CalenderMain;

const styles = (dayWrapWidth, state) => StyleSheet.create({
  container: {
    flex: 1,
  },
  dayWrap: {
    width: dayWrapWidth,
    height: dayWrapWidth,
    backgroundColor: state ? '#cccccc' : '#e3e2e2',
    opacity: state ? 0.9 : 0.7,
    borderRadius: 10
  },
  day: {
    color: state ? '#000000' : '#b7b6b6',
  },
  week: {
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  rows: {
    borderColor: 'yellow',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row'
  }
});