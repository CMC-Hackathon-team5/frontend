import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

function MyPage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Button style={{ padding: 10}} title="button" onPress={() => {
          console.log('press')
          navigation.navigate('Test')
          }}>
        </Button> */}
        
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

export default MyPage;