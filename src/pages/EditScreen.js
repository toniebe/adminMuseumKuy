import React,{useState} from 'react'
import { Image, ImageBackground, Picker, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import artMuseum from '../assets/images/artMuseum.jpg'
import BackLogo from '../assets/logo/back-arrow.png'

const EditScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("Jakarta Barat");
    return (
        <View style={styles.container}>
            <ImageBackground source={artMuseum} style={styles.top}>
                <TouchableOpacity style={styles.backContainer} onPress={()=> navigation.goBack()}>
                    <Image source={BackLogo} style={styles.backImage} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.bottom}>
                <ScrollView style={styles.form}>
                    <TextInput placeholder="Museum Name" style={styles.textInput} />
                    <TextInput placeholder="Address" style={styles.textInput} />
                    <Picker 
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={styles.textInput}
                    >
                        <Picker.Item label="Jakarta Barat" value="Jakarta Barat" />
                        <Picker.Item label="Jakarta Timur" value="Jakarta Timur" />
                        <Picker.Item label="Jakarta Selatan" value="Jakarta Selatan" />
                        <Picker.Item label="Jakarta Utara" value="Jakarta Utara" />
                        <Picker.Item label="Jakarta Pusat" value="Jakarta Pusat" />

                    </Picker>
                    <TextInput placeholder="Latitude" style={styles.textInput} />  
                    <TextInput placeholder="Longitude" style={styles.textInput} />  
                    <TextInput placeholder="Description" style={styles.textInput} />  
                    <TextInput placeholder="Price" style={styles.textInput} />  
                    <TextInput placeholder="Picture" style={styles.textInput} />  
                    <TouchableOpacity style={styles.buttonDone} onPress={() => navigation.navigate('Success') }>
                        <Text style={styles.fontDone}>Done</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    top:{
        flex:1,
        width:450,
        height:400
    },
    backContainer:{
        backgroundColor:'#A01F1F',
        borderRadius:50,
        height:30,
        width:30,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginTop:10,
    },
    backImage:{
        width:20,
        height:20,
        
    },
    bottom:{
        flex:2,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        marginHorizontal: 20,
        marginTop:10,
    },
    textInput:{
        borderWidth:1,
        borderColor:'#DBD7D2',
        borderRadius:5,
        marginBottom:10,
    },
    buttonDone:{
        backgroundColor:'#A01F1F',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        marginBottom:10
    },
    fontDone:{
        color:'white',
        fontWeight:'bold'
    }
})
