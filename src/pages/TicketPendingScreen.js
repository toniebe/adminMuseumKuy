import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import CardUser from '../components/CardUser'

const TicketPendingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Accept') }>
                <CardUser status="Pending" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Accept') }>
                <CardUser status="Pending" />
            </TouchableOpacity>
        </View>
    )
}

export default TicketPendingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    button:{
        paddingHorizontal:20,
        paddingVertical:10,
    }
})
