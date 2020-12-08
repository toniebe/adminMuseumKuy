import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import fotoProfile from '../assets/images/mariavania.jpeg'
import IconAccount from '../components/IconAccount'
import editIcon from '../assets/logo/edit.png'
import logoutIcon from '../assets/logo/logout.png'
import passwordIcon from '../assets/logo/password.png'
import * as Animatable from 'react-native-animatable'

const AccountScreen = ({navigation}) => {
    return (
        <Animatable.View animation="fadeIn" style={styles.container}>
            <ImageBackground source={fotoProfile} style={styles.imageBackground}>
                
            </ImageBackground>
            <View  style={styles.dataProfile}>
                <View style={styles.fontContainer}>
                    <Text style={styles.fontName}>Maria</Text>
                    <Text style={styles.fontName}>Vania</Text>
                    <Text style={styles.fontEmail}>Mariauwuw@gmail.com</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
                        <IconAccount name="Edit Profile" image={editIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                        <IconAccount name="Change Password" image={passwordIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <IconAccount name="Logout" image={logoutIcon} />
                    </TouchableOpacity>
                </View>
                    
            </View>
            
        </Animatable.View>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    imageBackground:{
        flex:2,
        width:450,
        height:500
    },
    conten:{
        flex:1,
        backgroundColor:'blue',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    dataProfile:{
        flex:2,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',        
    },
    fontContainer:{
        flex:1,
        paddingLeft:25,
        paddingTop:10
    },
    iconContainer:{
        flex:1.5,
        flexDirection:'row',
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-around',
        alignItems:'center'
    },
    fontName:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        
    },
    fontEmail:{
        marginTop:10,
        color:'white',
        fontWeight:'bold'
    },
})
