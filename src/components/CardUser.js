import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import userPhoto from '../assets/images/mariavania.jpeg'

const CardUser = () => {
    return (
        <View style={styles.container}>
            <Image source={userPhoto} style={styles.image} />
            <View style={styles.fontContainer}>
                <Text style={styles.fontEmail}>mariavaniauwuw@gmail.com</Text>
                <Text style={styles.fontDate}>11/20/2020</Text>
            </View>

            <View style={styles.statusContainer}>
                <Text style={styles.fontStatus}>Pending</Text>
            </View>
        </View>
    )
}

export default CardUser

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#C4C4C4',
        borderRadius:30,
        flexDirection:'row'
    },
    image:{
        width:47,
        height:47,
        borderRadius:70,
        marginHorizontal:10,
        marginVertical:10
    },
    fontContainer:{
        marginTop:10,
    },
    fontEmail:{
        fontWeight:'bold',
        fontSize:16
    },
    fontDate:{
        color:'#C4C4C4'
    },
    statusContainer:{
        justifyContent:'flex-end',
        marginBottom:15
    },
    fontStatus:{
        color:'#CFC706'
    }
})
