import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/home';
import DailyPic from './screens/dailypic';
import SpaceCrafts from './screens/spaceCrafts'
import StartMap from './screens/startMap'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
         <Stack.Navigator
         initialRoutName="Homescreen"
         screenOptions={{headerShown:false}}
         >
         <Stack.Screen
          name="Homescreen"
          component={Home}
          />
          <Stack.Screen
          name="Dailypic"
          component={DailyPic}
          />
           <Stack.Screen
          name="Locationscreen"
          component={SpaceCrafts}
          />
           <Stack.Screen
          name="Starscreen"
          component={StartMap}
          />
         </Stack.Navigator>
    </NavigationContainer>
  )
}
