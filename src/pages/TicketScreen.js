import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import gambarTransaksi from '../assets/images/MenuTransaksi.png'
import CardUser from '../components/CardUser'


const TicketScreen = () => {
    return (
        <View style={styles.container}>
           <Animatable.View 
            animation="fadeInDownBig"
            style={styles.containerTop}>
                <Image style={{width: 242, height:171}} source={gambarTransaksi}/>
                <Text style={styles.title}> Purchase Ticket </Text>
            </Animatable.View>
            <View style={styles.containerBottom}>
                <ScrollView>
                    <TouchableOpacity style={styles.card}>
                        <CardUser />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <CardUser />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <CardUser />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <CardUser />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                        <CardUser />
                    </TouchableOpacity>
                </ScrollView>
            </View> 
        </View>
    )
}

export default TicketScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    containerTop:{
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:10
    },

    title:{
        fontSize: 18,
        fontWeight: '400',
        marginTop: 15,
    },

    containerBottom:{
        flex:1,
        backgroundColor:'white',
        marginTop:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    card:{
        marginHorizontal:20,
        marginVertical:10,
    }
})
