import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native'
import user from '../assets/images/FotoProfil.png'
import CardUlasan from '../components/CardUlasan'
import DescriptionMuseum from '../components/DescriptionMuseum'
import image1 from '../assets/images/fatahilah1.jpg'
import image2 from '../assets/images/fatahilah2.jpg'
import addLogo from '../assets/images/edit_new.png'

const HomeScreen = ({navigation}) => {
    return (
        <ScrollView style={{flex:1,backgroundColor:'white'}}>
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.fontContainer}>
                    <Text style={styles.fontUser}>Hi, User</Text>
                    <Text style={styles.fontPromote}>Mari kelola Museum Anda</Text>
                </View>
                <View style={styles.userContainer}>
                        <Image source={user} style={{width:47,height:47}} />
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.descriptionContainer} >
                    {/* <DescriptionMuseum /> */}
                    <Text style={styles.fontMuseum}>Museum Art 1</Text>
                    <Text style={styles.fontAlamat}>Jl. Kumbang No 152, Jakarta Pusat </Text>
                    <Text style={styles.fontDeskripsi}>Museum ini didirikan ketika dibangun oleh konstruktor yang ada, museum ini berisikan lukisan-lukisan</Text>
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
                    <ScrollView horizontal={true} style={styles.ulasan} >
                            <CardUlasan />
                            <CardUlasan />
                            <CardUlasan />
                    </ScrollView>
            </View>
        </View>
        </ScrollView>
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
        paddingTop:20,
        marginTop:20,
        justifyContent:'space-around',
        alignItems:'center',
    },
    fontContainer:{
        flex:1,
        marginLeft:20,
        marginVertical:20,
        justifyContent:'center'
    },
    fontUser:{
        fontSize:16,
        color:'white',
    },
    fontWelcome:{
        fontSize:18,
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
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    descriptionContainer:{
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
    },
    ulasan:{
        flex:1,
        marginVertical:20,
        marginHorizontal:10,
        height:'100%'
        // backgroundColor:'green'
    }

})
