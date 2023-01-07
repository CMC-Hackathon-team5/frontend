import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './routes/Home';
import MyPage from './routes/MyPage';
import Alarm from './routes/Alarm';
import UnSelectTab from '../assets/UnSelectTab';
import SelectTab from '../assets/SelectTab';
import MyLog from './routes/MyLog';
import SignUp from './routes/SignUp';
import SignIn from './routes/SignIn';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const IconOption = { tabBarIconStyle: { marginBottom: 10 }, tabBarActiveTintColor: '#000', tabBarInactiveTintColor: '#000', tabBarIcon: ({focused}) => focused ? <SelectTab /> : <UnSelectTab /> }

  return (
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarStyle: { borderTopColor: '#fff' } }}>
        <Tab.Screen options={{ title: '홈', ...IconOption}} name="Home" component={Home} />
        <Tab.Screen options={{ title: '나의 로그', ...IconOption}} name="MyLog" component={MyLog} />
        {/* <Tab.Screen options={{ title: '알림', ...IconOption}} name="Alarm" component={Alarm} /> */}
        <Tab.Screen options={{ title: '마이페이지', ...IconOption}} name="MyPage" component={MyPage} />
      </Tab.Navigator>
  )
}

export default BottomNavigation;