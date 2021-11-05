import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ActivityIndicator } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Achievement from '../components/achievements';
import Badge from '../components/badge';
import Tile from '../components/tile1';
import Status from '../components/status';
import firestore from '@react-native-firebase/firestore';
import {getUserDetails} from '../firebase-repository/Users';
import { useDeprecatedAnimatedState } from 'framer-motion';

function Profile(props){
    console.log(props);
    return (
        <>
        <View style={styles.container}>
            <View style={styles.dispCent}>
                <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}}/>
                <Text style={styles.text}>{props.data.name}- Lvl. {props.data.level}</Text> 
                <Status type={props.data.status} color='#51e856'/>
                <Badge title={props.data.skillBadge} color= "#c051f0" padding={20}/>
                <View style={{marginBottom: wp(5)}} />
                    <Achievement data={{title1: 'Total time:', title1Data:props.data.totalTime,
                    title2:'Average Time:', title2Data: props.data.averageTime, 
                    title3:'Badges:', title3Data: 0}}/>
                <View style={{height: 20, width: wp(100), backgroundColor: '#40de6d'}} />
                <Tile />
                <Tile />
                <Tile />
            </View>
        </View>
        </>
    );
}

export default function ProfileScreen(props){
    const [data, setData] = React.useState(null);
    var userData;
    React.useEffect(async ()=>{
        userData = await getUserDetails();
        setData(userData);
        // console.log(userData);
    }, []);
    if(data != null){
        return <Profile data={data}/>
    }
    return (
        <View style={[styles.container, {justifyContent: 'center'}]} >
            <ActivityIndicator size="large" color="green"/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            width: wp(100),
            height: hp(100),
            flex: 1,
            backgroundColor: '#363636',
        },  
        image:{
            alignSelf: 'center',
            height: 120,
            width: 120,
            borderRadius: 60,
            marginBottom: hp(3)
        },
        dispCent:{
            alignItems:'center',
            marginTop: hp(3),
        },
        text:{
            fontSize: wp(10),
            color: '#f1f1f1',
        }
    }
)