import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Achievement from '../components/achievements';
import Badge from '../components/badge';
import Tile from '../components/tile1';

export default function ProfileScreen(props){
    return (
        <>
        <View style={styles.container}>
            <View style={styles.dispCent}>
                <Image style={styles.image} source={{uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'}}/>
                <Text style={styles.text}>Shivam Akhouri- Lvl. 10</Text> 
                <Badge title="Hermit" color= "#c051f0" padding={20}/>
                <View style={{marginBottom: wp(5)}} />
                <Achievement data={{title1: 'Total time:', title2:'Average Time:', title3:'Badges:'}}/>
                <View style={{height: 20, width: wp(100), backgroundColor: '#40de6d'}} />
                <Tile />
                <Tile />
                <Tile />
            </View>
        </View>
        </>
    );
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