import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import CardUser from '../components/CardUser'


const TicketAcceptedScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AcceptKunjungan') }>
                <CardUser status="Accepted" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AcceptKunjungan') }>
                <CardUser status="Accepted" />
            </TouchableOpacity>
        </View>
    )
}

export default TicketAcceptedScreen

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
