import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';

export default function Tile(){
    return (
        <>
            <View style={styles.container}>
                <LottieView source={require('../assets/idea.json')} autoPlay  style={{height: 67,marginLeft: 10, marginRight: 10 }}/>
                <Text style={styles.text}> Some Random Text</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#d5d5d5',
        borderWidth: 2,
        height: 70
    },
    image:{
        width: 70, 
        height: 70,
        borderRadius: 35,
    },
    text:{
        fontSize: wp(6),
        color: '#e5e5e5',
        marginLeft: wp(5)
    }
})