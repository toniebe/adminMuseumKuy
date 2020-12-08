import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import user from '../assets/images/FotoProfil.png'
import add from '../assets/images/add.png'
import edit from '../assets/images/edit.png'
import view from '../assets/images/view.png'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.fontContainer}>
                    <Text style={styles.fontUser}>Hi, User</Text>
                    <Text style={styles.fontWelcome}>Welcome to Museum Kuy</Text>
                    <Text style={styles.fontPromote}>Let's promote your Museum</Text>
                </View>
                <View style={styles.userContainer}>
                        <Image source={user} style={{width:47,height:47}} />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.buttonContiner}>
                    <TouchableOpacity style={styles.button}>
                        <Image  source={add} style={{width:40,height:40,marginLeft:20}} />
                        <Text style={styles.font}>Input Data</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}>
                        <Image  source={view} style={{width:40,height:40,marginLeft:20}} />
                        <Text style={styles.font}>View Data</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}>
                        <Image  source={edit} style={{width:35,height:35,marginLeft:20}} />
                        <Text style={styles.font}>Edit Data</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    top:{
        flex:1,
        backgroundColor:'#A01F1F',
        flexDirection:'row'
    },
    bottom:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        justifyContent:'space-around',
        alignItems:'center',
    },
    fontContainer:{
        flex:1,
        marginLeft:20,
        marginTop:60
    },
    fontUser:{
        fontSize:16,
        color:'white',
    },
    fontWelcome:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        fontFamily:'Roboto'
    },
    fontPromote:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    userContainer:{
        marginTop:60,
        marginRight:40
    },
    buttonContiner:{
        flex:1,
        justifyContent:'space-around',
        marginVertical:30
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#A01F1F',
        borderRadius:50,
        width:300,
        height:70
       
    },
    font:{
        fontWeight:'bold',
        marginLeft:30
    }

})
