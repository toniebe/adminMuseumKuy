import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import gambarTransaksi from '../assets/images/MenuTransaksi.png'
import CardPembelian from '../components/CardPembelian'

const AcceptScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Animatable.View 
            animation="fadeInDownBig"
            style={styles.containerTop}>
                <Image style={{width: 242, height:171}} source={gambarTransaksi}/>
                <Text style={styles.title}> Purchase Ticket </Text>
            </Animatable.View>
            <Animatable.View 
            animation="fadeInUpBig"
            style={styles.containerBottom}>
                <View style={styles.content}>
                    <CardPembelian />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HistoryTicket')} >
                        <Text style={styles.fontButton} >Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HistoryTicket')} >
                        <Text style={styles.fontButton} >Accept</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default AcceptScreen

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
    content:{
        
        marginTop:20,
        marginHorizontal:20,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:40,
        marginHorizontal:20,
    },
    button:{
        paddingVertical:10,
        paddingHorizontal:30,
        backgroundColor:'#A01F1F',
        borderRadius:20
    },
    fontButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:16
    }
})
