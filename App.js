import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/BottomNavigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CalendarView from './src/components/CalendarView';
import SignIn from './src/routes/SignIn';
import SignUp from './src/routes/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from './src/routes/AddTodo';
import Profile from './src/routes/Profile';
import Friends from './src/routes/Friends';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='root' component={BottomNavigation} />
        <Stack.Screen name='signUp' component={SignUp} />
        <Stack.Screen name='CalendarView' component={CalendarView} />
        <Stack.Screen name='AddTodo' component={AddTodo} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Friends' component={Friends} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
