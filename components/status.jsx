import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


export default function Status({type, color}){
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
            <View style = {{backgroundColor: color, width: 15, height: 15, marginRight: 5, borderRadius: 6}}>
            </View>
            <Text style={{fontSize: 20, color: 'white', opacity: 0.4}}>{type}</Text>
        </View>
    );
}