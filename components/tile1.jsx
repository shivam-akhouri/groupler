import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function Tile(){
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}} />
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
        borderColor: 'purple',
        borderWidth: 2
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