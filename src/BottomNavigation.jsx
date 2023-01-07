import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import MyPage from './routes/MyPage';
import SignUp from './routes/SignUp';

const Tab = createBottomTabNavigator();

function Home() {
  return <Text>Home</Text>;
}
function Search() {
  return <Text>Search</Text>;
}

const BottomNavigation = () => {
  return (
      <Tab.Navigator initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="MyPage" component={MyPage} />
      </Tab.Navigator>
  )
}

export default BottomNavigation;