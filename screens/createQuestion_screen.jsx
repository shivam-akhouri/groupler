import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {Input, Button} from 'react-native-elements';
import Question from '../models/question';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import LottieView from 'lottie-react-native';

export default function CreateQuestion({navigation, route}){
    const [question, setQeustion] = React.useState("");
    const [badge, setBadge] = React.useState('');
    const [photoUrl, setPhotoUrl] = React.useState("");
    const [uploading, setUploading] = React.useState(false);
    async function handleClick(){
        setUploading(true);
        var storageRef = storage().ref('dummyPhoto.jpg');
        var q = new Question(question, "", badge);
        console.log(q.printQuestion());
        console.log(photoUrl);
        if(question== '' || badge==""){
            Alert.alert("Please Fill out the Input Fields", "Either Question or badge fields are left empty");
            return;
        }
        if(photoUrl!= ""){
            const upload = storageRef.putFile("file://"+photoUrl);
            upload.then(()=>console.log("Image uploaded"));
            const url = await storage().ref('dummyPhoto.jpg').getDownloadURL();
            console.log(url);
            q.photoUrl = url;
        }
        firestore()
            .collection('Groups')
            .doc(route.params.id)
            .get()
            .then(res=>{
                var result = res.data().question;
                firestore()
                .collection('Groups')
                .doc(route.params.id)
                .update({
                    'question':[...result, {'question': q.question, 'answer': [], 'photoUrl': q.photoUrl, 'badge': q.badge}]
                }).then((_)=>console.log("Done Dana Dan"));
            })
        
    }
    return (
        <>
            <View style={styles.container} >
                <View style={{marginTop: hp(10)}}>
                    <TextInput placeholder="Enter the question" style={styles.textinput} numberOfLines={3} value={question} 
                    placeholderTextColor="white" onChangeText={(val)=>setQeustion(val)}/>
                    <TextInput placeholder="Enter badge" style={styles.textinput} value={badge} placeholderTextColor="white" onChangeText={(val)=>setBadge(val)}/>
                </View>
                {photoUrl ==""? <LottieView source={require('../assets/imageLoader.json')} autoPlay loop={false}  style={{height: wp(60), alignSelf: 'center' }}/>:
                <Image source={{uri:"file://"+photoUrl, width: wp(90), height: hp(30)}} />
                }   
                <View style={{position: 'absolute', width: wp(90), bottom: hp(20)}}>
                    <Button title="Take Picture" style={{marginBottom: 10}} buttonStyle={{backgroundColor: 'green'}}
                    onPress={()=>navigation.navigate('Camera', {setPhotoUri: setPhotoUrl})}/>
                    <View style={{margin: hp(1)}} />
                    <Button title="post" onPress={()=>handleClick()} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
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