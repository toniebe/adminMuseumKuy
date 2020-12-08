import React,{useEffect} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MuseumLogo from '../assets/logo/museumkuy.png'


const SpalshScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(()=>{
            navigation.replace('First')
        },3000)
    },[navigation])

    return (
        <View style={styles.container}>
            <Image source={MuseumLogo} style={styles.image} />
        </View>
    )
}

export default SpalshScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    image:{
        height:200,
        width:200
    }

})
