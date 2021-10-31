import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";


export default function Card(){
    return(
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View>
                    <Text>A Card goes here</Text>
                </View>
                <View>
                    <Text style={styles.text}>A text</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262626',
        width: wp(40),
        height: hp(30),
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    photo:{

    },
    text:{
        color: 'white',
        fontSize: wp(8),

    }
}
)