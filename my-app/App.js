import * as React from 'react'
import { StandarRoomScreen } from './components/standarRoom'
import { Index } from './components/roomCard'
import { NavigationContainer } from '@react-navigation/native';
import { SelectHotelScreen } from './components/selectHotelScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './components/homeScreen';
import { LoginScreen } from './components/login';
import {Room} from './components/roomCard'
import { CardHotel } from './components/hotelCards';
import { Favorites } from './components/favorites';
import { Search } from './components/search';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Favorites'>
          <Stack.Screen
          name='Favorites'
          component={Favorites}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
          options={{
            headerShown: false
          }} />
          
        <Stack.Screen
          name='Home'
          component={SelectHotelScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='CardHotel'
          component={CardHotel}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='Room'
          component={Room} />

        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen} 
          options={{
            headerShown: false
          }} /> 

        <Stack.Screen
          name='Search'
          component={Search} 
          options={{
            headerShown: false
          }} /> 
          

      </Stack.Navigator>
    </NavigationContainer>
  );
}