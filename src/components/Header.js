import React from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import searchLogo from '../assets/logo/loupe.png'
import filterLogo from '../assets/images/filter.png'

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="search" style={styles.textInput} />
            </View>

            <TouchableOpacity style={styles.imageContainer}>
                    <Image source={searchLogo} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                    <Image source={filterLogo} style={styles.imageFilter} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingTop:5,
        flexDirection:'row'
    },
    inputContainer:{
        flex:1,
    },
    textInput:{
        borderWidth:1,
        borderColor:'#C4C4C4',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
    },
    imageContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#A01F1F'
    },
    image:{
        width:20,
        height:20
    },
    filterContainer:{
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
    },
    imageFilter:{
        width:30,
        height:30
    }
})
