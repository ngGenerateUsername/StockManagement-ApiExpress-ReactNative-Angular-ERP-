import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import splash from './splash';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator();
// headerMode='none'
// This is for a specefic Screen Navigator options={{headerShown: false}} 
const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Splash" component={splash} />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} /> 
    </RootStack.Navigator>
);


export default RootStackScreen;