import * as React from 'react';
import { Platform, Text, View } from 'react-native';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Explore from '../explore';
import Account from '../account';
import Radio from '../radio';
import { Image, Colors, Assets, TouchableOpacity} from 'react-native-ui-lib';
import { RootStackParamList } from './RootStack';

const Tab = createBottomTabNavigator();

const AddIcon = ({children, onPress}) => {
  return (
    <TouchableOpacity 
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={onPress}
    >
      {children}
      {/* <Image assetName='add' style={{width: 60, height: 60, top: -20}} /> */}
    </TouchableOpacity>
  );
}

export default function MainTab() {
  const navigator = useNavigation<NavigationProp<RootStackParamList>>()

  const onPressSearch = () => {
    navigator.navigate('Search')
  }
  return (
      <Tab.Navigator
        screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.h2,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white', 
          //'#0E0B1F',
          position: 'absolute',
          left: 10,
          right: 10,
          borderRadius: 15,
          height: Platform.OS == 'android' ? 50 : 60,
          marginBottom: Platform.OS == 'android' ? 0 : 30,
          paddingTop: Platform.OS == 'android' ? 0 : 25
          }
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image assetName='iconHome' tintColor={color} />
            );
          },
          headerStyle: {
            backgroundColor: '#0E0B1F',
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: '#FFF',
            fontSize: 36,
          },
          headerTitle: 'Geez',
          headerTitleAlign: 'left',
          headerRight: () => {
            return <TouchableOpacity margin-16 onPress={onPressSearch}>
              <Image source={Assets.icons.search} />
            </TouchableOpacity>
          }
        }} />
        <Tab.Screen name="Explore" component={Explore} options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image assetName='iconExplore' tintColor={focused ? Colors.primary : '#71737B'} /> 
            );
          }
        }} />
        <Tab.Screen name="Add" component={Explore} options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              //<Image assetName='add' tintColor={focused ? Colors.primary : '#71737B'} resizeMode='contain' style={{ width: 60, height: 60 }} /> 
              // style={{borderColor: '#0E0B1F', borderWidth: 2, borderTopWidth: 0, borderBottomRightRadius: 100 , borderBottomLeftRadius: 100}}
              <View style={{backgroundColor: 'white', borderWidth: 2, borderRadius: 30, borderColor: 'white'}}>
                <Image assetName='add' resizeMode='contain' style={{ width: 60, height: 60}} />
              </View>
            );
          },
          tabBarButton: (props) => (
            <AddIcon {...props} />
          )
        }} />
        <Tab.Screen name="Account" component={Account} options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image assetName='iconAccount' tintColor={focused ? Colors.primary : '#71737B'} /> 
            );
          }
        }} />
        <Tab.Screen name="Radio" component={Radio} options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Image assetName='iconRadio' tintColor={focused ? Colors.primary : '#71737B'} /> 
            );
          }
        }} />
      </Tab.Navigator>
  );
}