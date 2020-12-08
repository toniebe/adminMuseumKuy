import React,{useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, TouchableHighlight,ScrollView } from 'react-native'
import logoEdit from '../assets/images/editprofile.png'
import * as Animatable from 'react-native-animatable'


const UpdateProfileScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView style={{backgroundColor: 'white',}}>
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
                            <Text style={styles.modalText}>Update Profile Success</Text>

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
                    <Image source={logoEdit} style={styles.image} /> 
                </View>

                <Animatable.View animation="fadeInUpBig" style={styles.containerBottom} >
                    <View style={styles.down}>
                        <View style={styles.containerInput}>
                            <TextInput placeholder="Name" style={styles.textInput} />
                            <TextInput placeholder="Email" style={styles.textInput} />
                            <View style={styles.fotoContainer}>
                                <TextInput placeholder="Photo" style={styles.textInput} />
                                <TouchableOpacity style={styles.buttonUpload}>
                                    <Text style={styles.fontButton}>Choose</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <View style={styles.updateContainer}>
                            <TouchableOpacity style={styles.buttonUpdate} onPress={() => setModalVisible(true)}>
                                <Text style={styles.fontUpdate}>Update</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animatable.View>
            </View>
        </ScrollView>
        
                
    )
}

export default UpdateProfileScreen

const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor:'#A01F1F',
    },

    up:{
        flex:1,
        height: '100%',
        // backgroundColor: 'blue',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 20,
        marginTop: 20,
    },

    down:{
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:30,
        width: '100%',
        height: '100%',

    },
    textInput:{
        borderWidth:1,
        borderColor:'#DBD7D2',
        borderRadius:10,
        marginVertical:15,
        marginTop:20, 
        width: 300,
        height: 40,
    },
    buttonUpload:{
        position:'absolute',
        top:25,
        right:17,
        backgroundColor:'#A01F1F',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:40,
       
    },
    fontButton:{
        fontWeight:'bold',
        color:'white'
    },

    updateContainer:{
        marginTop:50,
        alignItems: 'flex-end',
        // backgroundColor: 'yellow',
    },

    buttonUpdate:{
        backgroundColor:'#A01F1F',
        borderRadius:40,
        width:150,
        height:40,
        padding:10,
        alignItems:'center',
        marginTop: 10,
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
      },

      containerBottom:{
          flex: 2,
        //   backgroundColor: 'green',
          height: '100%',
      }, 

      containerInput: {
          alignItems: "center",
      }

})
