
// import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image, Dimensions, Alert,Modal,TouchableHighlight } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { AntDesign, Feather  } from '@expo/vector-icons'; 
const axios = require('axios').default;
import * as SecureStore from 'expo-secure-store';


const LoginScreen=({navigation}) => {
    const [data, setData] = useState({
        email:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry:true
    });
    const [modalVisible,setModalVisible] = useState(false);

    useEffect(() => {
        const middleware = async()=>{
           var mid = SecureStore.getItemAsync('token');
            if(mid)
            navigation.navigate("HomeScreen");
            
        }
        middleware();
    }, [])
    
    const   LoginApi= ()=>
    {
        
        axios.post('http://192.168.1.2:3001/auth/login',{email:data.email,password:data.password}).
        then((response)=>{
           SecureStore.setItemAsync('token',response.data.token);
           setData([]);
           navigation.navigate("HomeScreen");
        }).catch((error)=>{setModalVisible(true);});
    }


     const textInputChange = (val)=>{
        if(val.length != 0)
        {
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
        }else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            });
        }
    }

    const passwordInputChange = (val)=>{
        setData({
            ...data,
            password:val
        });
    }

    const secureTextInput = ()=>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }


  return (
    <Animatable.View animation="fadeInDown" style={styles.container}>
        <View style={styles.space} >
            <Text style={styles.textHeadre}>Welcome!</Text>    
        </View>


        <Animatable.View animation="fadeInUpBig" style={styles.content}>
            <Text style={styles.title}>SignIn</Text>
                    <View style={styles.action}>
                        <AntDesign name="user" size={20} color="black" style={styles.PlaceIcon} />
                    {/* <FontAwesome name="user-o" size={20}/> */}
                    <TextInput placeholder="Enter your Email" style={styles.textInput} value={data.email} autoCapitalize="none" onChangeText={(val)=>textInputChange(val)} />
                    {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                          <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  
                    :null}
                    </View>
                    <View style={styles.action}>
                        <AntDesign name="lock" size={20} color="black" style={styles.PlaceIcon} />
                        <TextInput placeholder="Enter your Password" value={data.password} secureTextEntry={data.secureTextEntry?true:false} style={styles.textInput} onChangeText={(val)=>passwordInputChange(val)} autoCapitalize="none" />
                        <TouchableOpacity  onPress={secureTextInput}>
                            {data.secureTextEntry?
                            <Feather name="eye-off" color="grey" size={20} />
                            :
                            <Feather name="eye" color="grey" size={20} />
        }
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity onPress={LoginApi}>
                       
                                <Text style={styles.buttonText} >LOGIN</Text>
                          
                        </TouchableOpacity>
                    </View>

                    <View style={styles.facebookLog}>
                        <TouchableOpacity>
                             <Image source={require('./../assets/facebook.png')} style={styles.logFb}  />
                        </TouchableOpacity>
                        <Text style={styles.banner}>SignIn with FACEBOOK</Text>
                    </View>
            
        </Animatable.View>



        {/* This is a modal */}
       
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wrong E-mail and/or password! Please verify your credentials and try again.</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

    
    </View>
    </Animatable.View>




  );
}

const {height} = Dimensions.get("screen");
const {width} = Dimensions.get("screen");
const logo_Sizee = height * 0.05;
const centerByHeight = height / 3;
const centerByWidth = width /6;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#CD4C51',
    },
    space:{
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    
    },
    content:{
        flex:2,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding:30,
        
        
    },
    title:{
        fontSize:30,
        color:'#CD4C51',
        fontFamily:'monospace',
        textAlign:'center',
        marginBottom:30,
        fontWeight:'bold',
    },
    textInput:{
        color:'#05375a',
        flex:1,
     
        paddingLeft:26,
        paddingBottom:4
        
    },
    textHeadre:{
        color:'#fff',
        fontWeight:'bold',
       
        fontSize:26,
     
    },

    action: {
        flexDirection:'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    button:{
        backgroundColor:'#CD4C51',
        marginTop:30,
        padding:10,
        borderRadius:10
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontWeight:'900',
        fontSize:18,
        fontFamily:'monospace'
    },
    logFb:{
        height: logo_Sizee,
        width:logo_Sizee,
    },
    facebookLog:{
        
        alignItems:'center',
        padding:30
    },
    banner:{
        color:'grey',
        fontSize:10,
        fontFamily:'monospace'
    },

    centeredView: {
        position:'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      modalView: {
        marginVertical:centerByHeight,
        marginHorizontal:centerByWidth,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal:15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      openButton: {
        backgroundColor: '#CD4C51',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontFamily:'monospace'
      },
})
export default LoginScreen;

