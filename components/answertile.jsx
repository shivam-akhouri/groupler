import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function AnswerTile() {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                       eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                       in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <View style={styles.line}></View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(90),
        opacity: 0.6,
        alignSelf: 'center'
    },
    text:{
        fontSize: 15,
        textAlign: 'justify'
    },
    line:{
        width: wp(80),
        opacity: 0.5,
        height: 3,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5
    }
})