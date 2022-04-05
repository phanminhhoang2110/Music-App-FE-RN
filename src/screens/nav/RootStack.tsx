import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ThroughWalk from '../throughwalk';
import SignIn from '../signin';
import SignUp from '../signup';
import ForgotPassword from '../forgotpassword';
import Verify from '../verify';
import MainTab from './MainTab';
import Search from '../search/search';
import Player from '../play/play';
import Home from '../home/index'

export type RootStackParamList = {
  ThroughWalk: undefined,
  SignIn: undefined,
  SignUp: undefined,
  ForgotPassword: undefined,
  Verify: undefined,
  MainTab: undefined,
  Player: undefined,
  Search: undefined,
  Home: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainTab'>
        <Stack.Screen name="ThroughWalk" component={ThroughWalk} options={{headerShown: false}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTintColor: '#FFF',
          headerStyle: {
              backgroundColor: '#0E0B1F'
          }
        }}/>
        <Stack.Screen name="Verify" component={Verify} options={{
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTintColor: '#FFF',
          headerStyle: {
              backgroundColor: '#0E0B1F'
          }
        }}/>
        <Stack.Screen name="MainTab" component={MainTab} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Search" component={Search} options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Player" component={Player} options={{
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTintColor: '#FFF',
          headerStyle: {
              backgroundColor: '#0E0B1F'
          }
        }}
        />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;