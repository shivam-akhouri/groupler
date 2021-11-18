import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {Input, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import LottieView from 'lottie-react-native';


export default function AnswerScreen({navigation, route}){
    const [answer, setAnswer] = React.useState("");
    const [photoUrl, setPhotoUrl] = React.useState("");
    const [uploading, setUploading] = React.useState(false);
    console.log(route.params.id);
    async function handleClick(){
        setUploading(true);
        var cloudPath = route.params.id+"/answers/"+new Date()+".jpg";
        var storageRef = storage().ref(cloudPath);
        console.log(photoUrl);
        if(answer == ""){
            Alert.alert("Please Fill out the Input Fields", "Either Question or badge fields are left empty");
            return;
        }
        if(photoUrl!= ""){
            const upload = storageRef.putFile("file://"+photoUrl);
            upload.then(
                async ()=>{
                    console.log("Image uploaded");
                    const url = await storage().ref(cloudPath).getDownloadURL();
                    firestore()
                    .collection('Groups')
                    .doc(route.params.id)
                    .collection('Question')
                    .doc(route.params.questionId)
                    .collection('Answer')
                    .add({
                        'answer': answer,
                        'photoUrl': url,
                    }).then(()=>{
                        console.log("answer uploaded");
                        setUploading(false);
                    })
                });
        }
    }
    return (
        <>
            <View style={styles.container} >
                <View style={styles.status}>
                    <LinearGradient colors={['#f200a2', '#a612e6','#3d43f2',]} 
                    style={styles.status} angle={90} useAngle={true}>  
                        <Icon
                        raised
                        reverse
                        name='reply'
                        color='#169144'
                        onPress={() => navigation.pop()} />
                        <Text style={styles.header}>Answer</Text>
                    </LinearGradient>
                </View>
                <View style={{marginTop: hp(10)}}>
                    <TextInput placeholder="Enter the Answer" style={styles.textinput} numberOfLines={10} value={answer} 
                    placeholderTextColor="white" onChangeText={(val)=>setAnswer(val)}/>
                </View> 
                {photoUrl ==""? <LottieView source={require('../assets/imageLoader.json')} autoPlay loop={false}  style={{height: wp(50), alignSelf: 'center' }}/>:
                <Image source={{uri:"file://"+photoUrl, width: wp(90), height: hp(35)}} />
                }   
                <View style={{position: 'absolute', width: wp(90), bottom: hp(20)}}>
                    <Button title="Take Picture" style={{marginBottom: 10}} buttonStyle={{backgroundColor: 'green'}}
                        onPress={()=>navigation.navigate('Camera', {setPhotoUri: setPhotoUrl})}/>
                    <View style={{margin: hp(1)}} />
                    <Button title={uploading? "Uploading...": "Post"} onPress={()=>handleClick()} disabled={uploading}/>
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