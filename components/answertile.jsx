import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function AnswerTile({answer}) {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {answer}
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