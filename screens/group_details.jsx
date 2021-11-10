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
    {id: 'b', value: require('../assets/files.json'), title: 'Files', screen: 'Files',  loop: false, width: wp(20), height: hp(14)},
    {id: 'c', value: require('../assets/voice.json'), title: 'Room', screen: 'Rooms',  loop: true},
    {id: 'd', value: require('../assets/question.json'), title: 'Questions', screen: 'QuestionList', loop : false},
    {id: 'e', value: require('../assets/createquestion.json'), title: 'Create Question', screen: 'CreateQuestion', loop : false},
    {id: 'f', value: require('../assets/timer.json'), title: 'Timer', screen: 'Timer', loop: false},
];

function Tile({image, title, loop, width, height}){
    return(
        <View style={styles.tile}>
            <LottieView source={image} autoPlay loop={loop} style={{height: height? height: hp(14), width: wp(20)}}/>
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
            <View style={styles.design}>
                {/* <View style={styles.shape}></View> */}
                <LinearGradient style={styles.shape} useAngle={true} colors={['#f200a2', '#a612e6', '#3d43f2', '#d92929']}></LinearGradient>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        backgroundColor: 'black',
        justifyContent: 'space-between'
    },
    tile:{
        width: wp(43),
        height: hp(23),
        backgroundColor: '#333232',
        padding: 10,
        alignItems: 'center',
        margin: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        elevation: 2,
        shadowColor: 'green',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 16,
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
    },
    design:{
        width: wp(100),
        height: hp(12),
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    shape:{
        width: wp(80),
        height: hp(18),
        backgroundColor: 'red',
        borderTopRightRadius: hp(7),
        borderTopLeftRadius: hp(7)
    }
})