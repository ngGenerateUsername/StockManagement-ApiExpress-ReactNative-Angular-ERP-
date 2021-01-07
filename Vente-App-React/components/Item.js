import React from 'react';

import { View,Text,StyleSheet } from 'react-native';


const Item = ({item})=>{

    return(
        <View style={styles.ListItem}>
           
                <Text style={styles.Title}>Number:  <Text style={styles.info}>{item.name}</Text> </Text>
                <Text style={styles.Title}>Order Date:  <Text style={styles.info}>{item.date_order}</Text> </Text>
                <Text style={styles.Title}>Partner:  <Text style={styles.info}>{item.partner_id[1]}</Text>  </Text>
                <Text style={styles.Title}>Total:  <Text style={styles.info}>{item.amount_total}</Text> </Text>
                <Text style={styles.Title}>State:  <Text style={styles.info}>{item.state}</Text> </Text>
            
         </View>
    );
    
}
export default Item;

const styles = StyleSheet.create({
    ListItem:{
     
        justifyContent:'center',
        marginVertical:20,
        marginHorizontal:40,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        paddingVertical:8
    },
   
    Title:{
        fontWeight:'bold',
        fontFamily:'monospace'
    },
    info:{
        fontWeight:'normal'
    }
   
})