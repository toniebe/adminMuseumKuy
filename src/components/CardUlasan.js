import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import userImage from '../assets/images/mariavania.jpeg'
import star from '../assets/images/star.png'

const CardUlasan = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={userImage} style={styles.image} />
            </View>
            <View style={styles.fontContainer}>
                <Text style={styles.fontName}>Maria Vania</Text>
                <Text style={styles.fontUlasan}>wow keren banget museumnya </Text>
            </View>
            <View style={styles.rating}>
                <Image source={star} style={styles.star} />
                <Text styles={styles.fontRating}>5.0</Text>
            </View>
        </View>
    )
}

export default CardUlasan

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginVertical:60,
        marginLeft:20,
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    imageContainer:{
        marginTop:10,
        marginLeft:5,
    },
    image:{
        width:80,
        height:80,
        borderRadius:40
    },
    fontContainer:{
        marginLeft:10,
        marginTop:15
    },
    fontName:{
        fontWeight:'bold',
        fontSize:18
    },
    rating:{
        flexDirection:'row',
        alignItems:'flex-end',
        marginBottom:20,
        marginHorizontal:10,
    },
    star:{
        width:20,
        height:20
    },
    fontRating:{
        fontWeight:'bold',
        marginLeft:5
    }
})
