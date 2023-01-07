import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

function Test({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>hellp</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Test;