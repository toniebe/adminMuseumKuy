import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'



const IconAccount = ({name,image}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={{width:40,height:40}} />
             <Text>{name}</Text>
        </View>
    )
}

export default IconAccount

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
