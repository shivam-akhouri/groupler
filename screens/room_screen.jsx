import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import AgoraUIKit from 'agora-rn-uikit';

export default function RoomScreen(){
    let rtcprops ={
        appId: '3e4351fa42fb49d7b48dfef4c2653f51',
        channel: 'test',
        token: '006eecac36c7bea451b9dd66b0b3820249eIACi4BgTesHdCXUY9Auz2tPWRSmWhHBObItVBVB0QKrukQx+f9gAAAAAEAAb/oIXQ+KCYQEAAQBC4oJh'
    }
    return (
        <AgoraUIKit rtcProps={rtcprops} />
    );
}