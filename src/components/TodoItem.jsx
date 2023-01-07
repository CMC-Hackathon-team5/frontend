import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import CheckIcon from "../../assets/CheckIcon";
import MoreIcon from "../../assets/MoreIcon";
import CheckedBox from "../../assets/CheckedBox";
import ArrowRight from "../../assets/ArrowRight";
import PlusIcon from "../../assets/PlusIcon";

// 받고 있는 Props 설명

// 1 
// add > 추가 버튼을 통해 추가가 가능한 경우
// <TodoItem add />

// 2 
// checked > 체크가 필요한 경우
// <TodoItem checked />

// 3 
// placeholder > 입력해야 하는 경우
// <TodoItem placeholder />

// 4 
// text > 받아오는 할 일
// <TodoItem text="dummy text" />

// 5 
// navigation > 이동해야 하는 경우 
// <TodoItem navigation={() => navigation.navigate('AddTodo')} /> 으로 import 해온 후
// () => props.navigation.navigate('App.js 파일에 선언한 name 이름 입력') 로 이동

// 6
// done > 완료된 경우
const TodoItem = (props) => {
  const [isCheck, setIsCheck] = useState()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsCheck(props.done)
  }, [props.done])

  const Menu = (
    <View style={styles.menu}>
      <Pressable onPress={() => console.log('수정하기')}>
        <Text style={propsStyles(false).select}>수정하기</Text>
      </Pressable>
      <View style={styles.line} />
      <Pressable onPress={() => console.log('삭제하기')}>
        <Text style={propsStyles(true).select}>삭제하기</Text>
      </Pressable>
    </View>
  )

  return (
    <View style={[styles.container, propsStyles(isCheck).isComplete, propsStyles(isOpen).isOpen, (props.navigation || props.add) && {backgroundColor: '#FDFF9E'}]}>
      <View style={styles.align}>
        {props.checked && <View style={styles.checkBox}>
          <Pressable onPress={() => setIsCheck(ele => !ele)}>
            <CheckedBox />
            {isCheck && <View style={styles.checked}>
              <CheckIcon />
            </View>}
          </Pressable>
        </View>}
        {props.placeholder ?
        <TextInput onSubmitEditing={props.onSubmit} value={props.value} onChangeText={props.onChange} style={styles.text} returnKeyType="done" placeholderTextColor="#B9B9B9" placeholder="상세 내용을 입력하세요!" />
        : <Text style={styles.text}>{props.text}</Text>}
      </View>
      {props.checked ? !props.placeholder && <Pressable hitSlop={{ left: 10, right: 10 }} onPress={() => setIsOpen(ele => !ele)}>
        <MoreIcon />
      </Pressable> : props.add ?  <Pressable onPress={props.onPress} hitSlop={{ left: 1000, right: 1000, top: 30, bottom: 30 }}>
        <PlusIcon />
      </Pressable> : <Pressable onPress={() => props.navigation()} hitSlop={{ left: 1000, right: 1000, top: 30, bottom: 30 }}>
        <ArrowRight />
      </Pressable>}
    <>{isOpen && Menu}</>
    </View>
  )
}

const propsStyles = (props) => StyleSheet.create({
  isComplete: {
    backgroundColor: props ? '#FDFF9E' : '#E2FFA4',
  },
  select: {
    fontSize: 14,
    color: props ? 'red' : '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  isOpen: {
    zIndex: props ? 999 : 0
  }
})

const styles = StyleSheet.create({
  line: { height: 1, backgroundColor: '#B9B9B9'},
  menu: {
    borderColor: '#B9B9B9',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    position: 'absolute',
    right: 17,
    top: 40
  },
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