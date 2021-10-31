import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import Tile from '../components/tile2';

export default function GroupScreen(props){
    return(
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: 30, backgroundColor:'black'}}>
            <Tile />
            <Tile />
            <Tile />
        </View>
    );
}