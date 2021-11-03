import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import LinearGradient from 'react-native-linear-gradient';

import Tile from '../components/tile2';

export default function GroupScreen(props){
    return(
        <LinearGradient colors={['#ffcd82', '#13ad13']} style={{alignItems: 'center', width: wp(100), height: hp(100)}}>
            <View style={{marginTop: hp(5)}}>
                <Tile title="Group Tittle" participants={20} scheduled="yes"/>
                <Tile />
                <Tile />
            </View>
        </LinearGradient>
    );
}