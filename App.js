import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/BottomNavigation';
import SignUp from './src/routes/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  console.log('fdafda');
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='root' component={BottomNavigation} />
        <Stack.Screen name='signUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
