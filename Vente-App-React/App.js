
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStackScreen from './screens/RootStackScreen';

export default function App() {
  return (
    <NavigationContainer>
        <RootStackScreen />
    </NavigationContainer>
  );
}

