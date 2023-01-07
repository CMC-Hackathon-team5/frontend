import { View, Text, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { addDays, endOfMonth, endOfWeek, format, isSameMonth, startOfMonth, startOfWeek } from 'date-fns'
import Carrot100 from '../../assets/Carrot100'
import Carrot80 from '../../assets/Carrot80'
import Carrot20 from '../../assets/Carrot20'
import Carrot40 from '../../assets/Carrot40'
import Carrot60 from '../../assets/Carrot60'

function CalenderMain({ currDate, prevMonth, nextMonth }) {
  const date = format(currDate, 'yyyy-MM-dd');
  const monthStart = startOfMonth(currDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const dayWrapWidth = Math.floor(Dimensions.get('window').width / 8);
  
  const year = format(currDate, 'yyyy')
  const month = format(currDate, 'M')

  const rows = [];
  let days = [];
  let day = startDate;
  let formattendDate = '';

  let tmp = [{
    date: "2023-1-17",
    per: 30
  },{
    date: "2023-1-7",
    per: 100
  },
  {
    date: "2023-1-10",
    per: 10
  },
  {
    date: "2023-1-11",
    per: 70
  },
  {
    date: "2023-1-19",
    per: 0
  }]

  const carrotIcon = (per) => {
    if (per == 0) {
      return false;
    } else if (per <= 20) {
      return <Carrot20/>
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

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattendDate = format(day, 'd')
      const cloneDay = day;
      let state = isSameMonth(day, monthStart)
      let dateStr = `${year}-${month}-${formattendDate}`
      let obj = tmp.find(e => e.date === dateStr)
      
      days.push(
        <View
          style={dayStyles(dayWrapWidth, state).dayWrap}
          key={day}
        >
          <Text style={styles(state).day}>{formattendDate}</Text>
          {(obj !== undefined) && carrotIcon(obj.per)}
        </View>
      )
      day = addDays(day, 1);
    }
    rows.push(
      <View style={style.days}>{days}</View>
    )
    days = [];
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={style.rows}>
        {rows}
      </View>
    </SafeAreaView>
  )
}

export default CalenderMain;

const style = StyleSheet.create({
  days: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rows: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const styles = (state) => StyleSheet.create({
  container: {
    flex: 1,
  },
  day: {
    color: state ? '#000000' : '#b7b6b6',
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