import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


export default function Badge({title, color, padding}){
    return (
        <>
            <View style={[ styles.badge, {backgroundColor: color, paddingLeft: padding, paddingRight: padding}]}>
                <Text style={{color:'white', fontSize: 16}}>{title}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    badge:{
        paddingLeft: 20,
        paddingRight: 20,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    }
})