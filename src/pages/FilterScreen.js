import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View ,Image} from 'react-native'
import { TouchableOpacity} from 'react-native-gesture-handler'
import calendar from '../assets/images/calendar.png'
import DateTimePicker from '@react-native-community/datetimepicker';
import Slider from '@react-native-community/slider';

const FilterScreen = ({navigation}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(5);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.fontFilter}>Filter</Text>
                <View style={styles.waktuContainer}>
                    <Text style={styles.fontJudul}>Waktu</Text>
                    <View style={styles.tanggalContainer}>
                        <Text>Tanggal Kunjungan</Text>
                        <TextInput style={styles.inputTanggal} value="24 Desember 2020" />
                        <TouchableOpacity style={styles.btnMinus} onPress={showDatepicker}>
                            <Image source={calendar} style={styles.Minus} />
                        </TouchableOpacity> 
                        {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                        )}
                    </View>
                </View>

            </View>
            <View style={styles.mid}>
                <View style={styles.statusContainer}>
                    <Text style={styles.fontJudul}>Status</Text>
                    <View style={styles.status} >
                        <TouchableOpacity>
                            <View style={styles.statusTransaksi}>
                                <Text >Pending</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.statusTransaksi}>
                                <Text >Accept</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.statusContainer}>
                    <Text style={styles.fontJudul}>Jumlah Tiket</Text>
                    <Slider
                        style={{width: '100%', height: '40%'}}
                        value={value}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#A01F1F"
                        maximumTrackTintColor="#000000"
                    />
                    <View style={styles.jumlah}>
                        <Text style={styles.fontJumlah}>{value}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HistoryTicket') }>
                    <Text style={styles.fontTerapkan}>Terapkan Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    top:{
        flex:1,
        // backgroundColor:'red',
        // justifyContent:'center',
        marginHorizontal:20
    },
    mid:{
        flex:1,
        // backgroundColor:'yellow',
        marginHorizontal:20,
        marginTop:20,
    },
    bottom:{
        flex:1,
        marginHorizontal:20,
        // backgroundColor:'green'
    },
    fontFilter:{
        fontSize:16,
        fontWeight:'bold',
        marginVertical:20
    },
    waktuContainer:{
        backgroundColor:'#EDEDED',
        borderRadius:5,
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,

    },
    fontJudul:{
        fontWeight:'bold'
    },
    tanggalContainer:{
        marginTop:20,
        flexDirection:'row'
        
    },
    inputTanggal:{
        borderWidth: 1,
        borderColor:'#C4C4C4',
        height:'20%',
        marginLeft:10,
        backgroundColor:'white',
        borderRadius:30,
    },
    Minus:{
        height: 15,
        width: 15,
    },

    btnMinus:{
        height: 25,
        width: 25,
        borderRadius: 25/2,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 10,
        marginLeft:10
    },
    

    statusContainer:{
        backgroundColor:'#EDEDED',
        borderRadius:5,
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        
    },

    status:{
        flexDirection:'row',
        // backgroundColor:'red',
        // justifyContent:'space-around',
        padding:10,
        marginTop:20,
        // marginHorizontal:20,
    },
    statusTransaksi:{
        backgroundColor:'#E1E1E1',
        padding:10,
        borderRadius:10,
        marginLeft:20

    },
    jumlah:{
        // backgroundColor:'red',
        alignItems:'center'
    },
    fontJumlah:{
        alignItems:'center',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'#C4C4C4',
        alignItems:'center',
        marginTop:10,
        paddingVertical:10,
        borderRadius:10
    },
    fontTerapkan:{
        fontSize:16,
        fontWeight:'bold'
    }
})
