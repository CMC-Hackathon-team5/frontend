import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/BottomNavigation';
import SignUp from './src/routes/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './src/routes/Test';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='root' component={BottomNavigation} />
        <Stack.Screen name='signUp' component={SignUp} />
        <Stack.Screen name='Test' component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
