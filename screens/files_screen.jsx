import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, FlatList, Pressable, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';


export default function FileScreen(){
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <LottieView source={require('../assets/file.json')}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        backgroundColor: 'black',
    }
})