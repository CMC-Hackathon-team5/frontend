import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import CarrotMain from '../../assets/CarrotMain';
import axios from 'axios'

function SignUp({navigation}) {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [pwd, setPwd] = useState("");
  const [isPwd, setIsPwd] = useState(false);

  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (isEmail && isPwd && nickname) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  }, [isEmail, isPwd, nickname])
  const onChangeNickname = (e) => {
    const { eventCount, target, text } = e.nativeEvent;
    setNickname(text);
  }

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

  const handleSubmit = async (email, pwd, nickname) => {
    console.log({
      "email": email, "password": pwd, "name": nickname
    })
    const config = {headers: {
      'Content-Type' : 'application/json',
    }}
    await axios.post('http://118.67.130.242:8080/api/user/signup', {
      "email": email, "password": pwd, "name": nickname
    },config)
    .then(res => {
      console.log("성공", res)
      navigation.navigate('SignIn')
    })
    .catch(err =>console.log(err))
  };

  return (
    <SafeAreaView style={styles.container}>
      <CarrotMain style={styles.carrot} />
      <View style={styles.form}>
        <Text style={styles.title}>회원가입</Text>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            placeholder="닉네임"
            onChange={(e) => onChangeNickname(e)}
            value={nickname}
            autoCapitalize='none'
          />
        </View>
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
          onPress={() => handleSubmit(email, pwd, nickname)}
          disabled={isConfirm ? false : true}
        ><Text style={btnStyle(isConfirm).text}>회원가입</Text></Pressable>
      </View>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: "#ffffff",
    textAlign: 'center',
  },
  carrot: {
    marginTop: 66,
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
  text: {
    color: isConfirm ? '#000000' : '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  }

});

export default SignUp;