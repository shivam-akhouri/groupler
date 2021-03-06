import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {Input, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';


export default function AnswerScreen({navigation, route}){
    const [suggestion, setSuggestion] = React.useState("");
    function handleClick(){
        
    }
    return (
        <>
            <View style={styles.status}>
                <LinearGradient colors={['#f200a2', '#a612e6','#3d43f2',]} 
                style={styles.status} angle={90} useAngle={true}>  
                    <Icon
                    raised
                    reverse
                    name='reply'
                    color='#169144'
                    onPress={() => navigation.pop()} />
                    <Text style={styles.header}>Suggestion</Text>
                </LinearGradient>
            </View>
            <View style={styles.container} >
                <View style={{marginTop: hp(10)}}>
                    <TextInput placeholder="Please add your suggestion here..." style={styles.textinput} numberOfLines={10} value={suggestion} 
                    placeholderTextColor="white" onChangeText={(val)=>setSuggestion(val)}/>
                </View> 
                <View style={{position: 'absolute', width: wp(90), bottom: hp(20)}}>
                    <Button title="post" onPress={()=>handleClick()} />
                </View>
            </View>
            
        </>
    );
}

const styles = StyleSheet.create({
    status:{
        width: wp(100),
        height: hp(10),
        borderBottomRightRadius: wp(20),
        backgroundColor: 'red',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    header:{
        marginLeft: wp(4),
        fontSize: wp(12),
        alignSelf: 'flex-start',
        color: 'white',
        fontFamily: 'Oswald'
    },
    container:{
        backgroundColor: '#303030',
        width: wp(100),
        height: hp(100),
        alignItems: 'center'
    },
    textinput:{
        backgroundColor: '#454545',
        color: 'white',
        borderWidth: 2,
        borderColor: '#e67132',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 15,
        height: 50,
        width:wp(90),
    },
})