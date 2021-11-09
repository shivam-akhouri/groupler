import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import Badge from './badge';

export default function Tile({title, participants, scheduled}){
    return (
        <View style={styles.container}>
            <View style={styles.ribbon} />
            <View>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.rowAlign}>
                    <Text style={[styles.text,{marginRight: 10, opacity: 0.5}]}>Participants: {participants}</Text>
                    <View style={[styles.text,{opacity: 0.5,width: 2, height: 20, marginRight: 10,  backgroundColor: '#252525'}]}></View>
                    <Text style={[styles.text,{opacity: 0.5}]}>Scheduled : </Text>
                    <Badge title={scheduled} color="green" padding={5}/>
                </View>
                <View style={styles.rowAlign}>
                    <Badge title="Notifications: 100" color="#1aa33c" padding={10}/>
                </View>
            </View>
            <View>
                <Icon
                    raised
                    name='add'
                    color='#169144'
                    onPress={() => console.log('hello')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(83),
        backgroundColor: '#363636',
        height: hp(15),
        flexDirection: 'row',
        margin: 5,
        borderRadius: 10,
        elevation: 20,
        shadowRadius: 10,
        shadowOffset: {height: 10, width: -5},
        borderColor: '#169442',
        borderWidth: 2,
        shadowColor: 'white',
        alignItems: 'center'
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
        color: '#e5e5e5'
    },
    text:{
        color: 'white',
    },
    ribbon:{
        height: "80%",
        width: 10,
        marginTop: (1.3),
        backgroundColor: '#d4113e',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
})