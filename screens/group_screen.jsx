import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, FlatList, Pressable, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import LinearGradient from 'react-native-linear-gradient';
import Tile from '../components/tile2';
import { getGroups } from '../firebase-repository/group';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


export default function GroupScreen(props){
    const [data, setData] = React.useState({}); 
    const [loading, setLoading]  = React.useState(true);

    React.useEffect(()=>{
        firestore().collection('Groups').where('participants', 'array-contains', auth().currentUser.email).get().then(querySnapshot =>{
            const groups = [];
            querySnapshot.forEach(documentSnapshot=>{
                groups.push({...documentSnapshot.data(), key: documentSnapshot.id});
            });
            setData(groups);
            console.log(groups);
            setLoading(false);
        });
    }, []);

        if(loading){
            return(
                <View style={[styles.container, {justifyContent: 'center'}]} >
                    <ActivityIndicator size="large" color="green"/>
                </View> 
            );
        } 
        return(
            <LinearGradient colors={['#ffcd82', '#13ad13']} style={{alignItems: 'center', width: wp(100), height: hp(100)}}>
                <View style={{marginTop: hp(5)}}>
                    {/* <Tile title="Group Tittle" participants={20} scheduled="yes"/> */}
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>props.navigation.navigate('GroupDetail')} >
                                <Tile title={item.name} participants={item.participants.length} scheduled={item.scheduled}/>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </LinearGradient>
        );  
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        flex: 1,
        backgroundColor: '#363636',
    },  
})