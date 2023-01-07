import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CheckIcon from "../../assets/CheckIcon";
import MoreIcon from "../../assets/MoreIcon";
import CheckedBox from "../../assets/CheckedBox";

const TodoItem = () => {
  const [isCheck, setIsCheck] = useState(false)

  return (
    <View style={[styles.container, propsStyles(isCheck).isComplete]}>
      <View style={styles.align}>
        <View style={styles.checkBox}>
          <Pressable onPress={() => setIsCheck(!isCheck)}>
            <CheckedBox />
            {isCheck && <View style={styles.checked}>
              <CheckIcon />
            </View>}
          </Pressable>
        </View>
        <Text style={styles.text}>todo item</Text>
      </View>
      <MoreIcon />
    </View>
  )
}

const propsStyles = (isCheck) => StyleSheet.create({
  isComplete: {
    backgroundColor: isCheck ? '#FDFF9E' : '#E2FFA4',
  }
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 19,
    justifyContent: 'space-between'
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    position: 'relative',
    marginRight: 15,
  },
  checked: {
    position: 'absolute',
    top: 0,
    left: 6
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 25,
  }
})

export default TodoItem;