import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SelectItem = (props) => {
  return (
    // <View style={styles.container}>
    <Text>
      <Text style={styles.container}>
        {props.text}
        </Text>
    </Text>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFF9E",
    paddingHorizontal: 6,
    paddingVertical: 8
  },
})

export default SelectItem