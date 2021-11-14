import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import AnswerTile from '../components/answertile';
import Badge from '../components/badge';


export default function QuestionScreen({route, navigation}){
    console.log(route.params.data);
    return (
        <>
            <View style={{width: wp(90), marginLeft: 20}}>
                <Text style={styles.text}>{route.params.data.question}</Text>
                {
                route.params.data.photoUrl ==""?<View/>:
                <Image source={{uri:route.params.data.photoUrl, width: wp(90), height: hp(35)}} />
                }
                <View style={{alignItems: 'flex-start'}}>
                    <Badge title={route.params.data.badge} color="red" padding={10} />
                    <Icon
                        raised
                        reverse
                        name='add'
                        color='#169144'
                        onPress={() => navigation.navigate('Answer', {id: route.params.id})} />
                </View>
            </View>
            <View style={styles.line}></View>
            <View>
                <FlatList 
                    data={route.params.data.answer}
                    renderItem={({item})=>(
                        <AnswerTile answer={item}/>
                    )}
                    keyExtractor={item=>item}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    line:{
        width: wp(90), 
        height: 2, 
        backgroundColor: 'black', 
        opacity: 0.5, 
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text:{
        fontSize: 30,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
    }
})