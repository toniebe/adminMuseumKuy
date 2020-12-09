import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DescriptionMuseum = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontMuseum}>Museum Art 1</Text>
            <Text style={styles.fontAlamat}>Jl. Kumbang No 152, Jakarta Pusat </Text>
            <Text style={styles.fontDeskripsi}>Museum ini didirikan ketika dibangun oleh konstruktor yang ada, museum ini berisikan lukisan-lukisan....</Text>
            <Text style={styles.fontHarga}>Rp. 75000</Text>
        </View>
    )
}

export default DescriptionMuseum

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:10
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
        marginVertical:20
    }
})
