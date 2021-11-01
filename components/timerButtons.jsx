import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { Icon } from 'react-native-elements';

export default function TimerButton(props){
    return (
        <>
            <View style={styles.container}>
                <View style={{width: wp(32), alignItems:'center'}}>
                    <Icon
                        raised
                        name='timer'
                        color='#ff6805'
                        onPress={() => props.func(!props.data)} />
                </View>
                <View style={{width: 2, height: 50, backgroundColor: 'white'}}></View>
                <View style={{width: wp(32), alignItems:'center'}}>
                    <Icon
                        raised
                        name='timeline'
                        color='#ff6805'
                        onPress={() => console.log('hello')} />
                </View>
                <View style={{width: 2, height: 50, backgroundColor: 'white'}}></View>
                <View style={{width: wp(32), alignItems:'center'}}>
                    <Icon
                        raised
                        name='spa'
                        color='#ff6805'
                        onPress={() => console.log('hello')} />
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