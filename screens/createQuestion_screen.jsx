import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {Input, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Question from '../models/question';
import firestore from '@react-native-firebase/firestore';

export default function CreateQuestion(){
    const [question, setQeustion] = React.useState("");
    const [badge, setBadge] = React.useState('');
    function handleClick(){
        var q = new Question(question, "", badge);
        console.log(q.printQuestion());
        firestore()
            .collection('questions')
            .add({
                name: q.question,
                badge: q.badge
            })
            .then(() => {
                console.log('User added!');
            });
    }
    return (
        <>
            <LinearGradient style={{width: wp(100), height: hp(100)}}
                colors={['#fafffa', '#9cff9c']}
                useAngle={true}
                angle={135}>
                    <View style={{width: wp(90), height: hp(90), alignSelf: 'center'}} >
                        <View style={{marginTop: hp(10)}}>
                            <Input placeholder="Enter the question" numberOfLines={3} value={question} onChangeText={(val)=>setQeustion(val)}/>
                            <Input placeholder="Enter badge" value={badge} onChangeText={(val)=>setBadge(val)}/>
                        </View>
                        <View style={{position: 'absolute', width: wp(90), bottom: hp(10)}}>
                            <Button title="Take Picture" style={{marginBottom: 10}} buttonStyle={{backgroundColor: 'green'}}/>
                            <View style={{margin: hp(1)}} />
                            <Button title="post" onPress={()=>handleClick()} />
                        </View>
                    </View>
            </LinearGradient>
        </>
    );
}