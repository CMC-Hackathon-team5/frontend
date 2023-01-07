import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';

function Alarm({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.date}>MyLog</Text>
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

export default Alarm;