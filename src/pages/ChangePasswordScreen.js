import React,{useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, TouchableHighlight,ScrollView } from 'react-native'
import logoChangePassword from '../assets/images/changepassword.png'
import * as Animatable from 'react-native-animatable'


const ChangePasswordScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={styles.scroll}> 
        <View style={styles.container}>
            {/*-------- modal ------- */}
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>your password has been updated successfully</Text>

                        <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#A01F1F" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                            navigation.navigate('Account');
                        }}
                        >
                        <Text style={styles.textStyle}>OK</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>
            {/* ------------ */}



            <View style={styles.up}>
               <Image source={logoChangePassword} style={styles.image} /> 
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.down}>
                <TextInput placeholder="Current Password" style={styles.textInput} />
                <TextInput placeholder="New Password" style={styles.textInput} />
                <TextInput placeholder="Confirm New Password" style={styles.textInput} />
                
                <View style={styles.updateContainer}>
                    <TouchableOpacity style={styles.buttonUpdate} onPress={() => setModalVisible(true)}>
                        <Text style={styles.fontUpdate}>Update</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    </ScrollView>
    )
}

export default ChangePasswordScreen

const styles = StyleSheet.create({
    scroll:{
        flex:1,
        backgroundColor:'white'

    },
    container:{
        flex:1,
        backgroundColor:'#A01F1F'
    },
    up:{
        flex:1,
        backgroundColor:'#A01F1F',
        alignItems:'center',
        justifyContent:'center'
    },
    down:{
        marginTop:15,
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
        paddingHorizontal:30
    },
    textInput:{
        borderWidth:1,
        borderColor:'#DBD7D2',
        borderRadius:10,
        marginVertical:15
    },
    buttonUpload:{
        position:'absolute',
        top:30,
        right:17,
        backgroundColor:'#A01F1F',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:40
    },
    fontButton:{
        fontWeight:'bold',
        color:'white'
    },
    updateContainer:{
        paddingVertical:50,
        // backgroundColor:'yellow',
        alignItems:'flex-end'
    },
    buttonUpdate:{
        backgroundColor:'#A01F1F',
        borderRadius:40,
        width:124,
        height:40,
        padding:10,
        alignItems:'center',
        
    },
    fontUpdate:{
        fontWeight:'bold',
        color:'white'
    },
    image:{
        width:174,
        height:130,
        borderRadius:40
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 100,
        paddingVertical:20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical:5,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
