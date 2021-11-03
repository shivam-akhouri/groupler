import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {Input, Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Question from '../models/question';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export default function CreateQuestion({navigation}){
    const [question, setQeustion] = React.useState("");
    const [badge, setBadge] = React.useState('');
    const [photoUrl, setPhotoUrl] = React.useState("");
    function handleClick(){
        var storageRef = storage().ref('dummyPhoto.jpg');
        var q = new Question(question, "", badge);
        console.log(q.printQuestion());
        console.log(photoUrl);
        if(photoUrl!= ""){
            const upload = storageRef.putFile("file://"+photoUrl);
            upload.then(()=>console.log("Image uploaded"));
        }
        // firestore()
        //     .collection('questions')
        //     .add({
        //         name: q.question,
        //         badge: q.badge
        //     })
        //     .then(() => {
        //         console.log('User added!');
        //     });
        console.log("Done Dana Dan");
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
                        {photoUrl !="" &&
                        <Image source={{uri:"file://"+photoUrl, width: wp(90), height: hp(30)}} />
                        }   
                        <View style={{position: 'absolute', width: wp(90), bottom: hp(10)}}>
                            <Button title="Take Picture" style={{marginBottom: 10}} buttonStyle={{backgroundColor: 'green'}}
                            onPress={()=>navigation.navigate('Camera', {setPhotoUri: setPhotoUrl})}/>
                            <View style={{margin: hp(1)}} />
                            <Button title="post" onPress={()=>handleClick()} />
                        </View>
                    </View>
            </LinearGradient>
        </>
    );
}