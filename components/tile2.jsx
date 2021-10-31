import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import Badge from './badge';

export default function Tile({title, participants, scheduled}){
    return (
        <View style={styles.container}>
            <View style={{height: "100%", width: 5, backgroundColor: 'green'}} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.rowAlign}>
                    <Text style={{marginRight: 10, opacity: 0.5}}>Participants: {participants}</Text>
                    <View style={{opacity: 0.5,width: 2, height: 20, marginRight: 10,  backgroundColor: '#252525'}}></View>
                    <Text style={{opacity: 0.5}}>Scheduled : </Text>
                    <Badge title={scheduled} color="green" padding={5}/>
                </View>
                <View style={styles.rowAlign}>
                    <Badge title="Notifications: 100" color="#c81bd1" padding={10}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(90),
        backgroundColor: '#c8cacf',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        height: 100,
        flexDirection: 'row',
        marginBottom: 10,
        elevation: 5,
        shadowOffset: {height: 4, width: -3}
    },
    rowAlign:{
        flexDirection: 'row',
        marginLeft: 15,
        alignItems:'center',
        marginBottom: 3
    },
    title:{
        fontSize: 30,
        marginLeft: 15,
        marginTop: 5,
    }
})