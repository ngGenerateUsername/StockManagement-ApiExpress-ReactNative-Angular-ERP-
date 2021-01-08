import React,{useState,useEffect} from 'react';

import { View,StyleSheet,Text,FlatList,TouchableOpacity  } from 'react-native';

import Item from './../components/Item';
const axios = require('axios').default;
import * as SecureStore from 'expo-secure-store';
import * as Animatable from 'react-native-animatable';



const HomeScreen = ({navigation})=>
{
    const [sales, setSales] = useState([]);
  
    useEffect( () => {
       const getSalesList = async ()=>{
        
        const token = await SecureStore.getItemAsync('token');
        if(token)
                {
                axios.get('http://192.168.1.2:3001/ventes/all',{headers:{
                    'authorization': `Bearer ${token}`,
                }}).then((response)=>{
                                setSales(response.data);
                            
                            }).catch((error)=>{
                                if(error.response.status == 401)
                                navigation.navigate("LoginScreen");
                });
                }
                else
                {
                    navigation.navigate("LoginScreen");
                }
        }
        getSalesList().then().catch((error)=>{console.log(error)});
     
  
    },[]);
    const logout =  async ()=>{
        SecureStore.deleteItemAsync("token").then(()=>{console.log("clicked")}).catch(()=>{console.log("error")});
        navigation.navigate("LoginScreen");
    }

    return(
       
        <View style={styles.Home}>
            <View style={styles.header} >
                <Text style={styles.HeaderText}> SALES LIST </Text>
                
                <TouchableOpacity style={styles.Logout} onPress={logout}>
                    <Text>LOGOUT</Text>
                </TouchableOpacity>

            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.container}>

                <FlatList 
                data={sales}
                renderItem={Item}
                keyExtractor = {item => item.id.toString()} />
           
              
                
            </Animatable.View>
        </View>
        
    );

}
export default HomeScreen;

const styles = StyleSheet.create({
    Home:{
        flex:1,
        backgroundColor:'#CD4C51'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingVertical:38,
        paddingLeft:30
        
    },
    HeaderText:{
        color:'#FFF',
        fontSize:28,
        fontFamily:'monospace'
    },
    container:{
        flex:8,
        backgroundColor:'#FFF',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    Logout:{
        position:'absolute',
        top:0,
        right:5,
        marginTop:30
    }

})