import * as React from 'react'
import { StandarRoomScreen } from './components/standarRoom'
import { Index } from './components/roomCard'
import { NavigationContainer } from '@react-navigation/native';
import { SelectHotelScreen } from './components/selectHotelScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './components/homeScreen';
import { LoginScreen } from './components/login';
import {Room} from './components/roomCard'
import { Favorites } from './components/favorites';
import { Search } from './components/search';
import { History } from './components/history';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='SelectHotelScreen'
          component={SelectHotelScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='Room'
          component={Room} />

        <Stack.Screen
          name='Favorites'
          component={Favorites} 
          options={{
            headerShown: false
          }} /> 

        <Stack.Screen
          name='Search'
          component={Search} 
          options={{
            headerShown: false
          }} /> 

        <Stack.Screen
          name='History'
          component={History} 
          options={{
            headerShown: false
          }} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}