import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/BottomNavigation';
import CalendarView from './src/components/CalendarView';
import SignIn from './src/routes/SignIn';
import SignUp from './src/routes/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from './src/routes/AddTodo';
import Profile from './src/routes/Profile';
import Friends from './src/routes/Friends';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(false)

  useEffect(() => {
    getToken()
  })

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log('get token ', value);
      if (value !== null) {
        const data = JSON.parse(value);
        setToken(data)
      } else setToken(false)
    } catch (e) {
      console.log('????', e.message);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {token ? <>
          <Stack.Screen name='root' component={BottomNavigation} />
          <Stack.Screen name='CalendarView' component={CalendarView} />
          <Stack.Screen name='AddTodo' component={AddTodo} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='Friends' component={Friends} />
        </> : <>
          <Stack.Screen name='SignIn' component={SignIn} />
          <Stack.Screen name='SignUp' component={SignUp} />
        </>}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
