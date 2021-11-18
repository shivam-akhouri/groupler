import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image, FlatList,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import AnswerTile from '../components/answertile';
import Badge from '../components/badge';
import firestore from '@react-native-firebase/firestore';


export default function QuestionScreen({route, navigation}){
    const [answers, setAnswers] = React.useState([]);
    React.useState(()=>{
        firestore().collection("Groups").doc(route.params.id)
        .collection('Question').doc(route.params.data.id)
        .collection('Answer').get()
        .then(res=>{
            var data = res.docs;
            var ans = [];
            data.forEach(val=>{
                ans.push({...val.data(), id: val.id});
            });
            setAnswers(ans);
            console.log(ans);
        });
    }, [])
    return (
        <>

            <FlatList 
                ListHeaderComponent={()=>(
                    <>
                        <View style={{width: wp(90), marginLeft: 20}}>
                        <Text style={styles.text}>{route.params.data.question}</Text>
                        {
                        route.params.data.photoUrl ==""?<View/>:
                        <Image source={{uri:route.params.data.photoUrl, width: wp(90), height: hp(90)}} />
                        }
                        <View style={{alignItems: 'flex-start'}}>
                            <Badge title={route.params.data.badge} color="red" padding={10} />
                            <Icon
                                raised
                                reverse
                                name='add'
                                color='#169144'
                                onPress={() => navigation.navigate('Answer', {id: route.params.id, questionId: route.params.data.id})} />
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    </>
                    )}
                data={answers}
                renderItem={(item)=>(
                    <AnswerTile answer={item}/>
                )}
                keyExtractor={item=>item.id}
            />
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