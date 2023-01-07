import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

function SignUp() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");

  const [pwd, setPwd] = useState("");
  const [isPwd, setIsPwd] = useState(false);
  const [pwdMessage, setPwdMessage] = useState("");

  const [confirmPwd, setConfirmPwd] = useState("");
  const [isPwdConfirm, setIsPwdConfirm] = useState(false);
  const [pwdConfirmMessage, setPwdConfirmMessage] = useState("");

  const [isConfirm, setIsConfirm] = useState(false);

  const onChangeEmail = (e) => {
    const { eventCount, target, text } = e.nativeEvent;
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = text;
    setEmail(text);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("잘못된 이메일 형식입니다.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  }

  const onChangePwd = (e) => {
    const { eventCount, target, text } = e.nativeEvent;
    const pwdRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const pwdCurrent = text;
    setPwd(pwdCurrent);

    if (!pwdRegex.test(pwdCurrent)) {
      setPwdMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPwd(false);
    } else {
      setPwdMessage("안전한 비밀번호입니다.");
      setIsPwd(true);
    }
  };

  const onChangeConfirmPwd = (e) => {
    const { eventCount, target, text } = e.nativeEvent;
    const pwdConfirm = text;
    let confirmResult = "";
    setConfirmPwd(pwdConfirm);

    if (pwd === pwdConfirm) {
      setPwdConfirmMessage("비밀번호가 일치합니다.");
      setIsPwdConfirm(true);
      confirmResult = true;
    } else {
      setPwdConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPwdConfirm(false);
      confirmResult = false;
    }

    if (isEmail && isPwd && confirmResult) {
      setIsConfirm(true);
    } else {
      setIsConfirm(false);
    }
  };

  const handleSubmit = (obj) => {
    alert(obj.email)
    alert(obj.email)
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>회원가입</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="이메일"
            onChange={(e) => onChangeEmail(e)}
            value={email}
            autoCapitalize='none'
          />
          <Text>{emailMessage}</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            onChange={(e) => onChangePwd(e)}
            value={pwd}
            autoCapitalize='none'
          />
          <Text>{pwdMessage}</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="비밀번호 확인"
            onChange={(e) => onChangeConfirmPwd(e)}
            value={isPwdConfirm}
            autoCapitalize='none'
          />
          <Text>{pwdConfirmMessage}</Text>
        </View>
        <Button
          onPress={() => handleSubmit({ "email": email, "pwd": pwd })}
          title="회원가입"
        />
      </View>
    </SafeAreaView>
  )

};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    padding: '20%',
    backgroundColor: "#ffffff",
    textAlign: 'center',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    fontWeight: 'bold'
  },
  titleWrap: {

  },
  title: {
    fontSize: 24,
  },
  input: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});

export default SignUp;