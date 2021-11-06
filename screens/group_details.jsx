import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import LottieView from 'lottie-react-native';
const data = [
    {id: 'a', value: require('../assets/chat.json'), title: 'Chat'},
    {id: 'b', value: require('../assets/files.json'), title: 'Files'},
    {id: 'c', value: require('../assets/voice.json'), title: 'Room'},
    {id: 'd', value: require('../assets/question.json'), title: 'Questions'},
    {id: 'e', value: require('../assets/question.json'), title: 'Updated Soon'},
    {id: 'f', value: require('../assets/question.json'), title: 'Updated Soon'},
];

function Tile({image, title}){
    return(
        <View style={styles.tile}>
            <LinearGradient colors={['#03a63f', '#9802cf']} style={styles.tileGrad} angle={-45} useAngle={true}>
                <LottieView source={image} autoPlay  style={{height: hp(13)}}/>
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </View>
    );
}

export default function GroupDetail(){
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.list}
                data={data}
                renderItem={({item})=>(
                    <Tile image={item.value} title={item.title}/>
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
        backgroundColor: '#303030'
    },
    tile:{
        width: wp(40),
        height: hp(20),
        marginTop: 10,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20,
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