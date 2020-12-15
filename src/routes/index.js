import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
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

import FilterScreen from '../pages/FilterScreen'

import iconHome from '../assets/images/home.png'
import iconTransaksi from '../assets/images/transfer.png'
import iconAccount from '../assets/images/user.png'
import searchLogo from '../assets/logo/loupe.png'
import filterLogo from '../assets/images/filter.png'


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

  const Ticket = ({navigation}) => {
    return(
      <View 
      
      style={styles.container}>
          {/* <Header /> */}

          <View style={styles.containerHeader}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="search" style={styles.textInput} />
            </View>

            <TouchableOpacity style={styles.imageContainer}>
                    <Image source={searchLogo} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                    <Image source={filterLogo} style={styles.imageFilter} />
                </TouchableOpacity>
            </View>
          </View>


          <TabTop.Navigator swipeEnabled={true} tabBarOptions={{
            labelStyle: {
              fontSize: 10,
            },
            tabStyle: {
              justifyContent: "center",
              alignItems: "center",
            },
            
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

          <Stack.Screen name="Filter" component={FilterScreen} options={{
            title: '',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#A01F1F',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>

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
  },
  containerHeader:{
    marginTop:10,
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingTop:5,
    flexDirection:'row'
  },
  inputContainer:{
      flex:7,
  },
  textInput:{
      borderWidth:1,
      borderColor:'#C4C4C4',
      borderTopLeftRadius:20,
      borderBottomLeftRadius:20,
  },
  imageContainer:{
      flex:1,
      paddingHorizontal:20,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#A01F1F'
  },
  image:{
      width:20,
      height:20
  },
  filterContainer:{
      marginLeft:20,
      justifyContent:'center',
      alignItems:'center'
  },
  imageFilter:{
      width:30,
      height:30
  }
})
