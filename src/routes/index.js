import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplahScreen from '../pages/SpalshScreen'
import FirstScreen from '../pages/FirstScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'
import HomeScreen from '../pages/HomeScreen'
import TicketScreen from '../pages/TicketScreen'
import AccountScreen from '../pages/AccountScreen'
import ChangePasswordScreen from '../pages/ChangePasswordScreen'
import UpdateProfileScreen from '../pages/UpdateProfileScreen'

import InputScreen from '../pages/InputScreen'
import EditScreen from '../pages/EditScreen'
import ViewScreen from '../pages/ViewScreen'

import SuccessScreen from '../pages/SuccessScreen'
import AcceptScreen from '../pages/AcceptScreen'


import iconHome from '../assets/images/home.png'
import iconTransaksi from '../assets/images/transfer.png'
import iconAccount from '../assets/images/user.png'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
    const {color, focused} = props.data
    let colorSelected = focused ? '#A01F1F' : 'grey'
    return(
      <View>
        <Image source={props.image} style={{width: 25, height: 25, tintColor: colorSelected }} />
      </View>
    )
  }

const Dashboard = () => {
    return(
      <Tab.Navigator >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: (props) => {return <IconBottom data={props} image={iconHome}/>},
          }}
        />
        <Tab.Screen 
          name="HistoryTicket" 
          component={TicketScreen} 
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: (props) => { return <IconBottom data={props} image={iconTransaksi}/>}
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={AccountScreen}
          options={{
            tabBarLabel: () => {return null},
            tabBarIcon: (props) => { return <IconBottom data={props} image={iconAccount}/>}
          }}
        />
      </Tab.Navigator>

    )
}

const Route = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplahScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} options={{
            title: 'Update Profile',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
            <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{
            title: 'ChangePassword',
            headerStyle: {
              backgroundColor: '#A01F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
        
          <Stack.Screen name="InputData" component={InputScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="EditData" component={EditScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ViewData" component={ViewScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Accept" component={AcceptScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
        
    )
}

export default Route

const styles = StyleSheet.create({})
