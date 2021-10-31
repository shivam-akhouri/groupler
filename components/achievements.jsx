import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function Achievement(props){
    return (
        <>
            <View style={styles.container}>
                <View style={{width: wp(32), alignItems:'center'}}>
                    <Text style={styles.text}>{props.data.title1}</Text>
                    <Text style={styles.text}>20</Text>
                </View>
                <View style={{width: 2, height: 50, backgroundColor: 'white'}}></View>
                <View style={{width: wp(32), alignItems:'center'}}>
                    <Text style={styles.text}>{props.data.title2}</Text>
                    <Text style={styles.text}>200</Text>
                </View>
                <View style={{width: 2, height: 50, backgroundColor: 'white'}}></View>
                <View style={{width: wp(32), alignItems:'center'}}>
                    <Text style={styles.text}>{props.data.title3}</Text>
                    <Text style={styles.text}>20</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: wp(100),
        alignItems:'center',
        opacity: 0.7,
        backgroundColor: '#524949',
        paddingTop: 20,
        paddingBottom: 20,
    },
    text:{
        fontSize: wp(5),
        color: '#f1f1f1',
    }
})