import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import AnswerTile from '../components/answertile';
import Badge from '../components/badge';


export default function QuestionScreen(){
    return (
        <>
            <View style={{width: wp(90), marginLeft: 20}}>
                <Text style={styles.text}>How is this question ?</Text>
                <View style={{alignItems: 'flex-start'}}>
                    <Badge title="Important" color="red" padding={10} />
                </View>
            </View>
            <View style={styles.line}></View>
            <View>
                <AnswerTile />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    line:{
        width: wp(90), 
        height: 2, 
        backgroundColor: 'black', 
        opacity: 0.5, 
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text:{
        fontSize: 30,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
    }
})