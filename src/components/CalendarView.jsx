import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [isSelected, setIsSelected] = useState(false);

  return (
    <SafeAreaView>
      <Calendar
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: '#FFAB6F',
          arrowColor: '#FFAB6F',
          dotColor: '#FFAB6F',
          todayTextColor: '#FFAB6F',
        }}
        onDayPress={day => {
          setSelectedDate(day.dateString);
          setIsSelected(true);
        }}
      />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  }
});

export default CalendarView;