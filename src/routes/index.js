import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SplahScreen from '../pages/SpalshScreen'
import FirstScreen from '../pages/FirstScreen'
import RegisterScreen from '../pages/RegisterScreen'
import LoginScreen from '../pages/LoginScreen'
import HomeScreen from '../pages/HomeScreen'
import TicketScreen from '../pages/TicketScreen'
import AccountScreen from '../pages/AccountScreen'
import ChangePasswordScreen from '../pages/ChangePasswordScreen'
import UpdateProfileScreen from '../pages/UpdateProfileScreen'

import AllTicketScreen from '../pages/AllTicketScreen'
import TicketPendingScreen from '../pages/TicketPendingScreen'
import TicketAcceptedScreen from '../pages/TicketAcceptedScreen'
import AcceptKunjungan from '../pages/AcceptKunjunganScreen'

import InputScreen from '../pages/InputScreen'
import EditScreen from '../pages/EditScreen'
import ViewScreen from '../pages/ViewScreen'

import SuccessScreen from '../pages/SuccessScreen'
import AcceptScreen from '../pages/AcceptScreen'


import iconHome from '../assets/images/home.png'
import iconTransaksi from '../assets/images/transfer.png'
import iconAccount from '../assets/images/user.png'
import Header from '../components/Header'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const IconBottom = (props) => {
    const {color, focused} = props.data
    let colorSelected = focused ? '#A01F1F' : 'grey'
    return(
      <View>
        <Image source={props.image} style={{width: 25, height: 25, tintColor: colorSelected }} />
      </View>
    )
  }

  const Ticket = () => {
    return(
      <View 
      
      style={styles.container}>
          <Header />


          <TabTop.Navigator swipeEnabled={true} tabBarOptions={{
            labelStyle: {
              fontSize: 10,
            },
            tabStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
            style:{
              // borderTopLeftRadius:20,
              // borderTopRightRadius:20,
              // marginTop:30,
              // borderWidth: 1,
  
            }
            
          }} >
            <Tab.Screen name="Transaksi Pending" component={TicketPendingScreen} />
            <Tab.Screen name="Transaksi Berhasil" component={TicketAcceptedScreen} />
            <Tab.Screen name="Semua Transaksi" component={AllTicketScreen} />
          </TabTop.Navigator>
        
      </View>
    )
  }

const Dashboard = () => {
    return(
      <Tab.Navigator tabBarOptions={{
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
        },
      }} >
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
          component={Ticket} 
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
          <Stack.Screen name="AcceptKunjungan" component={AcceptKunjungan} options={{ headerShown: false }}/>
        </Stack.Navigator>
        
    )
}

export default Route

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',    
  },
  header:{
    paddingHorizontal:20,
  }
})
