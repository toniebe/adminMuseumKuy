import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import userPhoto from '../assets/images/mariavania.jpeg'

const CardUser = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={userPhoto} style={styles.image} />
            </View>
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
    imageContainer:{
        flex:1,

    },
    image:{
        width:47,
        height:47,
        borderRadius:70,
        marginHorizontal:10,
        marginVertical:10
    },
    fontContainer:{
        flex:3,
        marginTop:10,
    },
    fontEmail:{
        fontWeight:'bold',
        fontSize:14
    },
    fontDate:{
        color:'#C4C4C4'
    },
    statusContainer:{
        flex:1,
        justifyContent:'center',
        // backgroundColor:'green',
    },
    fontStatus:{
        color:'#CFC706',
        fontSize:14,
        marginTop:10,
        marginRight:10
    }
})
