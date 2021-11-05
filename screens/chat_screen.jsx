import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image, TextInput } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MessageTile from '../components/messageTile';

export default function ChatScreen(){
    return (
        <View style = {styles.container}>
            <MessageTile message="Hello this is shivam Akhouri" type="sender"/>
            <MessageTile message="Hello this is shivam Akhouri" type="sender"/>
            <MessageTile message="Hello this is shivam Akhouri  hello mister how do you do?" type="sender"/>
            <MessageTile message="Hello this is shivam Akhouri" type="receiver"/>
            <MessageTile message="Hello this is shivam Akhouri" type="receiver"/>
            <MessageTile message="Hello this is shivam Akhouri  hello mister how do you do?" type="receiver"/>
            <View style={styles.input}>
                <TextInput style={styles.inputStyle} numberOfLines={1} placeholder="Enter Text Message" placeholderTextColor="#a5a5a5"/>
                <Icon
                    raised
                    name='send'
                    color='#ff6805'
                    onPress={() =>{}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262626',
        flex: 1,
        width: wp(100),
        height: hp(100)
    },
    inputStyle:{
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#454545',
        color: 'white',
        fontSize: 15,
        paddingLeft: 10,
        paddingRight: 10,
        width: wp(78),
        height: 50
    },
    input: {
        position: 'absolute',
        bottom: 0,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: wp(100),
    }
})