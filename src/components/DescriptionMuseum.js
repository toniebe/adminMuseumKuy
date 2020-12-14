import React from 'react'
import { Image, StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import image1 from '../assets/images/fatahilah1.jpg'
import image2 from '../assets/images/fatahilah2.jpg'
import addLogo from '../assets/images/edit_new.png'

const DescriptionMuseum = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontMuseum}>Museum Art 1</Text>
            <Text style={styles.fontAlamat}>Jl. Kumbang No 152, Jakarta Pusat </Text>
            <Text style={styles.fontDeskripsi}>Museum ini didirikan ketika dibangun oleh konstruktor yang ada, museum ini berisikan lukisan-lukisan....</Text>
            <View style={{flexDirection:'row',marginTop:20}}>
                <Image source={image1} style={{width:140,height:70,marginRight:10}} />
                <Image source={image2} style={{width:140,height:70}} />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.fontHarga}>Rp. 75000</Text>
                <TouchableOpacity style={{position:'absolute',bottom:10,right:10}} onPress={() => navigation.navigate('EditData')} >
                    <Image source={addLogo} style={{width:30,height:30}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DescriptionMuseum

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:0,
        paddingHorizontal:5,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        },
    fontMuseum:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    fontAlamat:{
        marginBottom: 5
    },
    fontDeskripsi:{
        marginBottom: 5
    },
    fontHarga:{
        fontWeight:'bold',
        marginVertical:30
    }
})
