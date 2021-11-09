import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';
import Shimmer from 'react-native-shimmer';

const data = [
    {id: 'a', value: require('../assets/chat.json'), title: 'Chat', screen:'Chat', loop: false},
    {id: 'b', value: require('../assets/files.json'), title: 'Files', screen: 'Chat',  loop: false, },
    {id: 'c', value: require('../assets/voice.json'), title: 'Room', screen: 'Rooms',  loop: true},
    {id: 'd', value: require('../assets/question.json'), title: 'Questions', screen: 'QuestionList', loop : false},
    {id: 'e', value: require('../assets/createquestion.json'), title: 'Create Question', screen: 'CreateQuestion', loop : false},
    {id: 'f', value: require('../assets/timer.json'), title: 'Timer', screen: 'Timer', loop: false},
];

function Tile({image, title, loop, width, height}){
    return(
        <View style={styles.tile}>
            <LottieView source={image} autoPlay loop={loop} style={{height: height? height: hp(15), width: wp(20)}}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default function GroupDetail({navigation, route}){
    console.log(route.params.id);
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={data}
                renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>navigation.navigate(item.screen, {id: route.params.id})} >
                                <Tile image={item.value} title={item.title} loop={item.loop} width={item.width} height={item.height}/>
                        </TouchableOpacity>
                )}
                keyExtractor={item=>item.id}
                numColumns={2}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        backgroundColor: '#1c1c1c'
    },
    tile:{
        width: wp(43),
        height: hp(23),
        backgroundColor: '#333232',
        padding: 10,
        alignItems: 'center',
        margin: 13,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#169442',
    },
    tileGrad:{
        width: wp(40),
        height: hp(20),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    list:{
        alignItems: 'center',
        maxWidth: wp(100),
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Oswald',
    }
})