import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import artMuseum from '../assets/images/artMuseum.jpg'
import BackLogo from '../assets/logo/back-arrow.png'
import CardUlasan from '../components/CardUlasan'
import DescriptionMuseum from '../components/DescriptionMuseum'

const ViewScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={artMuseum} style={styles.top}>
                <TouchableOpacity style={styles.backContainer} onPress={()=> navigation.goBack()}>
                    <Image source={BackLogo} style={styles.backImage} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottom}>
                <View style={styles.descriptionContainer}>
                    <DescriptionMuseum />
                </View>
                <ScrollView horizontal={true} >
                        <CardUlasan />
                        <CardUlasan />
                </ScrollView>

            </View>
        </View>
    )
}

export default ViewScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    top:{
        flex:1,
        width:450,
        height:400
    },
    backContainer:{
        backgroundColor:'#A01F1F',
        borderRadius:50,
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:10,
    },
    backImage:{
        width:20,
        height:20,
        
    },
    bottom:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    descriptionContainer:{
        backgroundColor:'white',
        marginHorizontal:20,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
})
