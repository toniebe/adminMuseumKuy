import React,{useState} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Modal, TouchableHighlight, ScrollView } from 'react-native'
import Museum from '../assets/logo/museumkuy01.png'


const RegisterScreen = ({navigation}) => {
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
                            <Text style={styles.modalText}>Register Success</Text>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#A01F1F" }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    navigation.navigate('Login');
                                }}
                                >
                                <Text style={styles.textStyle}>OK</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                    </Modal>
                    {/* ------------ */}

                
                    <View style={styles.form}>
                        {/* <ScrollView style={styles.scrollView}>   */}
                            <View style={styles.up}>
                                <Image source={Museum} style={styles.image} />
                            </View>
                            <View style={styles.down}>
                                <TextInput placeholder="Full name" style={styles.input} />
                                <TextInput placeholder="Email" style={styles.input}/>
                                <TextInput placeholder="Password" style={styles.input}/>
                                <TextInput placeholder="Confirm Password" style={styles.input}/>
                                
                                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                                    <Text style={styles.textButton}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                        {/* </ScrollView> */}
                    </View>
            </View>
        </ScrollView>
        

    
   
    
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A01F1F',
        justifyContent:'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    
    form:{
        flex: 1,
        backgroundColor:'white',
        marginHorizontal:30,
        marginVertical:50,
        borderRadius:30,
        width: 300,
        height: 500,
        justifyContent:'center',
        alignContent: 'center',
    },
    up:{
        // backgroundColor: 'green',
        alignItems:'center',
        justifyContent:'center'
    },
    down:{
        // backgroundColor:'blue',
        marginHorizontal:20
    },
    image:{
        width:150,
        height:120,
    },
    input:{
        borderWidth:1,
        borderColor:'#DBD7D2',
        borderRadius:5,
        paddingLeft:20,
        marginBottom:20,
        borderRadius: 30,
    },
    button:{
        backgroundColor:'#A01F1F',
        borderRadius:20,
        padding:10,
        alignItems:'center',
        marginTop:20
    },
    textButton:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
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

      scroll:{
        flex: 1,
        backgroundColor: '#A01F1F',
      }
})
