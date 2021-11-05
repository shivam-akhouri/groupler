import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from 'react-native-linear-gradient';

export default function MessageTile(props){
    return (
            <View style={[styles.container, {alignSelf:props.type == 'sender'? 'flex-end' : 'flex-start'}]}>
            <LinearGradient colors={props.type == 'sender' ?['#3b16f2', '#f70596'] : ['#f70596','#3b16f2', ]} angle={-90} useAngle={true} style={{
                paddingBottom: 10,
                paddingTop: 5,
                paddingRight: 10,
                paddingLeft: 10,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={styles.text}>{props.message}</Text>
            </LinearGradient>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        maxWidth: wp(80),
        marginRight: 10,
        marginTop: 5,
        marginLeft:10,
        borderRadius: 15
    },
    text:{
        fontSize: 15,
        color:'#fff',
    }
})