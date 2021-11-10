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
            <View style={styles.listFile} >
                <View style={styles.tile}>
                    <View style={styles.innertile}>
                        <LottieView source={require('../assets/file.json')} autoPlay loop={false} style={{height: hp(14), width: wp(20)}}/>
                        <View style={styles.texttile}>
                            <Text style={styles.text} numberOfLines={2}>Hello</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {styles.footer}> 
                <TouchableOpacity>
                    <LottieView source={require('../assets/addfile.json')} autoPlay loop={false} style={{height: hp(12)}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        backgroundColor: 'black',
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: wp(6.),
    },
    innertile:{
        backgroundColor: '#303030',
        alignItems: 'center',
        padding: hp(0.5),
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#5822b5',
        margin: hp(0.5)
    },
    tile:{
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#b52222',
        width: wp(40),
        height: hp(25.5)
    },
    footer:{
        width: wp(100),
        backgroundColor: '#454545',
        alignItems: 'center',
        height: hp(12),
        borderTopLeftRadius: wp(100),
        borderTopRightRadius: wp(100),
    },
    listFile:{
        width: wp(100),
        height: hp(78),
    },
    texttile:{
        height: hp(8.3),
        justifyContent: 'center'
    }

})