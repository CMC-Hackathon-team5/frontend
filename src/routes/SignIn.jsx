import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import CarrotMain from '../../assets/CarrotMain';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from '@react-navigation/native';

function SignIn({navigation}) {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [pwd, setPwd] = useState("");
  const [isPwd, setIsPwd] = useState(false);

  const [isConfirm, setIsConfirm] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if (isEmail && isPwd) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }, [isEmail, isPwd])

  const onChangeEmail = (e) => {
    const { eventCount, target, text } = e.nativeEvent;
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = text;
    setEmail(text);
    if (!emailRegex.test(emailCurrent)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }

  const onChangePwd = (e) => {
    const { eventCount, target, text } = e.nativeEvent;
    const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwdCurrent = text;
    setPwd(pwdCurrent);

    if (!pwdRegex.test(pwdCurrent)) {
      setIsPwd(false);
    } else {
      setIsPwd(true);
    }
  };

  const handleSubmit = async (email, pwd) => {
    console.log({
      "email": email, "password": pwd
    })
    const res = await axios({
      headers: {
        'Content-Type' : 'application/json',
      },
      method: 'post',
      url: 'http://118.67.130.242:8080/api/user/login',
      data: {
        "email": email, "password": pwd
      }
    })
    .then(res => {
      console.log(res.data.data.jwt)
      const token = res.data.data.jwt
      const stringValue = JSON.stringify(token);
      AsyncStorage.setItem('token', stringValue);
      alert("로그인에 성공하였습니다.");
    })
    .catch(err =>console.log(err))
  };

  useEffect(() => {
    setIsLogin(true)    
  }, [isLogin])

  return (
    <SafeAreaView style={styles.container}>
      <CarrotMain style={styles.carrot}/>
      <View style={styles.form}>
        <Text style={styles.title}>로그인</Text>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="이메일"
            onChange={(e) => onChangeEmail(e)}
            value={email}
            autoCapitalize='none'
          />
        </View>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            onChange={(e) => onChangePwd(e)}
            value={pwd}
            autoCapitalize='none'
          />
        </View>
        <Pressable
          style={btnStyle(isConfirm).btn}
          onPress={() => handleSubmit(email, pwd)}
          disabled={isConfirm ? false : true}
        ><Text style={btnStyle(isConfirm).text}>로그인</Text></Pressable>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text>회원가입</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    textAlign: 'center',
  },
  carrot: {
    position: 'relative',
    left: '75%'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B9B9B9',
    paddingVertical: 36,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: '#FDFF9E'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 36,
    fontWeight: 'bold'
  },
  inputWrap: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 15,
    borderColor: '#B9B9B9',
    borderWidth: 1,
    fontSize: 16,
    color: 'black',
    backgroundColor: '#FFFFFF',
  }
});

const btnStyle = (isConfirm) => StyleSheet.create({
  btn: {
    backgroundColor: isConfirm ? '#E2FFA4' : '#B9b9b9',
    width: '80%',
    borderRadius: 15,
  },
  text :{
    color: isConfirm ? '#000000' : '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  }
 
});

export default SignIn;