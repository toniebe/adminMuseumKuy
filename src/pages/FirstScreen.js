import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Travel from '../assets/images/travel.png'
import * as Animatable from 'react-native-animatable'


const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.up}>
                <Animatable.Image 
                animation="bounceIn"
                duration={1500}
                source={Travel} style={styles.image} />
            </View>
            <Animatable.View 
            animation="fadeInUpBig"
            style={styles.down}>
                <Text style={styles.moto}>Grow your knowledge</Text>
                <TouchableOpacity style={styles.buttonSignup} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.fontSignup}>SIGN UP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSignin} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.fontSignin}>SIGN IN</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    up:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    down:{
        flex:1,
        alignItems:'center',
        marginTop:50
    },
    image:{
        width:200,
        height:200,
    },
    moto:{
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Ranga-Regular',
        fontStyle: 'italic',
        marginBottom:50
    },
    buttonSignup:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#A01F1F',
        borderRadius: 100,
        paddingVertical:10,
        paddingHorizontal:100,
        marginBottom:15
    },
    fontSignup:{
        fontSize: 20,
        color:'#A01F1F',
        fontWeight:'bold'
    },
    buttonSignin:{
        backgroundColor:'#A01F1F',
        borderWidth:1,
        borderColor:'#A01F1F',
        borderRadius: 100,
        paddingVertical:10,
        paddingHorizontal:100,
        marginBottom:20
    },
    fontSignin:{
        fontSize: 20,
        color:'white',
        fontWeight:'bold'
    },
})
