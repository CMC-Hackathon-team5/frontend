import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const InfoItem = (props) => {
  const [text, setText] = useState('')

  useEffect(() => {
    if (props) setText(props.text)
  }, [])

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setText} value={text} style={styles.text} returnKeyType="done" placeholderTextColor="#B9B9B9" placeholder="상세 내용을 입력하세요!" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginTop: 30,
    paddingHorizontal: 19,
    paddingVertical: 25,
    borderColor: '#B9B9B9',
    borderWidth: 1
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  }
})

export default InfoItem;