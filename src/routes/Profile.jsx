import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import BackButton from '../components/BackButton';
import InfoItem from '../components/InfoItem';
import TodoItem from '../components/TodoItem';

function Profile({navigation}) {
  const saveAlert = () =>
    Alert.alert(
      "저장이 완료되었습니다!",
      "",
      [{ text: "확인"}]
    );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <BackButton navigation={navigation} />
        <View style={styles.align}>
          <Text style={styles.text}>프로필</Text>
          <Pressable onPress={saveAlert}>
            <Text style={styles.save}>저장하기</Text>
          </Pressable>
        </View>
        <InfoItem text='default' />
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
  align: {
    marginTop: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    fontWeight: "600"
  },
  save: {
    fontWeight: '500',
    fontSize: 14,
    color: '#B9B9B9'
  }
})

export default Profile;