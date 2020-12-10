import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import userImage from '../assets/images/mariavania.jpeg'

const CardPembelian = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image source={userImage} style={styles.imageUser} />
                <View style={styles.fontContainer}>
                    <Text style={styles.fontEmail}>mariavaniauwuw@gmail.com</Text>
                    <Text style={styles.fontName}>maria vania</Text>
                </View>
            </View>
            <View style={styles.ticketContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.fontDate} >Date</Text>
                    <Text style={styles.fontIsi}>11/20/2020</Text>
                </View>
                <View style={styles.ticketDetail}>
                    <Text style={styles.fontDate} >Total Ticket</Text>
                    <Text style={styles.fontIsi}>5</Text>
                </View>
            </View>
        </View>
    )
}

export default CardPembelian

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    userContainer:{
        flexDirection:'row'
    },
    imageUser:{
        width:100,
        height:100,
        borderRadius:50
    },
    fontContainer:{
        marginTop:20,
        marginLeft:10
    },
    fontEmail:{
        fontWeight:'bold',
        fontSize:16,
    },
    ticketContainer:{
        marginVertical:20,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    dateContainer:{
        alignItems:'center'
    },
    fontDate:{
        fontSize:18,
        color:'#C4C4C4'
    },
    fontIsi:{
        fontSize:14,
        fontWeight:'bold',
        marginTop:10
    },
    ticketDetail:{
        alignItems:'center'
    }

})
