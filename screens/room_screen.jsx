import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import auth from '@react-native-firebase/auth';

import AgoraUIKit from 'agora-rn-uikit';


export default function RoomScreen({route}){
    const [loading, setLoading] = React.useState(true);
    const [rtcProp, setRtcProp] = React.useState({});
    console.log("Loading...");
    React.useEffect(()=>{
        var url = new URL('https://groupler.herokuapp.com/access-token');
        url.searchParams.append('channelname', route.params.id);
        console.log("Call send");
        fetch(url).then(res=>res.json()).then(
            data=>{
                setRtcProp({
                    appId : 'eecac36c7bea451b9dd66b0b3820249e',
                    appCertificate : '3e4351fa42fb49d7b48dfef4c2653f51',
                    channel: route.params.id,
                    token: data.token
                });
                console.log(data.token);
            }
        ).then(()=>{console.log(rtcProp);
            setLoading(false)
        });
    }, []);
    
    if(loading){
        return (
            <View style={[styles.container, {justifyContent: 'center'}]} >
                <ActivityIndicator size="large" color="green"/>
            </View> 
        );
    }
    return (
        <>
            
            <AgoraUIKit rtcProps={rtcProp} />
        </>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262626',
        flex: 1,
        width: wp(100), 
        height: hp(100)
    },
});