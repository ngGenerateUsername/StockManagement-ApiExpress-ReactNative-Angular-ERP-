import React from 'react';
import { View,Text, Dimensions,StyleSheet, Image,TouchableOpacity, Button } from 'react-native';
import { color } from 'react-native-reanimated';
import {LinearGradient} from 'expo-linear-gradient';

import { MaterialIcons } from '@expo/vector-icons'; 
import * as Animatable from 'react-native-animatable';
import * as SecureStore from 'expo-secure-store';


const splash = ({navigation})=>{


    const goToPage= async()=>
    {
       var Token = await SecureStore.getItemAsync('token');

        if(Token)
        {
            navigation.navigate("HomeScreen");
        }else
        {
            navigation.navigate("LoginScreen");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image animation="bounceIn"  source={require('./../assets/sales.png')} style={styles.logo}
                resizeMode="stretch"  />
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style = {styles.title}>Don't miss updates, Stay connected!</Text>
                <Text style= {styles.text}>This application made to consult the sales of your company. </Text>
                {/* <Text style= {styles.text}>Created By: Ahmed ben hamouda & Aymen Jlassi</Text> */}

                <View style={styles.button}>
                       <TouchableOpacity onPress={goToPage}>
                                <LinearGradient colors={['#CD4C51', '#96323C']} style={styles.signIn} >
                                        <Text style={styles.textSign}>Get Started
                                        
                                        </Text>
                                        <MaterialIcons name="navigate-next" size={18} color="white" />
                                </LinearGradient>
                        </TouchableOpacity>
                
                </View>
             

            </Animatable.View>
        </View>
    )
}
export default splash;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#CD4C51'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    logo:{
        width:height_logo,
        height:height_logo
    },
    title:{
        color:'#CD4C51',
        fontSize:30,
        fontWeight: 'bold'
    },
    text:{
        color:'grey',
        marginTop:5
    },
    button:{
        alignItems:'flex-end',
        marginTop:30,
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    textSign:{
        color:'white',
        fontWeight:'bold'
    }
})