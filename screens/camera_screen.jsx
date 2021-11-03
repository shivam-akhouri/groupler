import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import { Icon } from 'react-native-elements';
import RNFS from 'react-native-fs';


export default function CameraScreen({route}){
    const [{cameraRef}, {takePicture}] = useCamera(null);
    const handleCapture = async ()=>{
        try{
            const data = await takePicture();
            const filepath = data.uri;
            const newFilePath = RNFS.ExternalCachesDirectoryPath+'/myfile.jpg';
            RNFS.moveFile(filepath, newFilePath).then(()=>{
                console.log("file moved");
            })
            route.params.setPhotoUri(newFilePath);
            console.log("image Moved");
            console.log(data.uri);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.camera}
                captureAudio={false}
            >
                <Icon
                    raised
                    name='camera'
                    color='#000'
                    onPress={()=>handleCapture()} 
                />
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    camera:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})