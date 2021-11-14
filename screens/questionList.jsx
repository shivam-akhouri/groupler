import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ActivityIndicator, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Badge from '../components/badge';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

function Tile({question, leng}){
    return(
        <View style={styles.item}>
            <Text style={styles.itemText}>{question}</Text>
            <Badge title={"Answer("+leng+")"} color="#18a60c" padding={10} />
        </View>
    );
}

export default function QuestionListScreen({navigation, route}){
    const [loading, setLoading] = React.useState(true);
    const [data, setData]  =React.useState([])

    React.useEffect(()=>{
        firestore().collection('Groups').doc(route.params.id).get().then(res=>{
            var grpData = res.data();
            setData(grpData.question);
            setLoading(false);
        });
    },[]);
    if(loading){
        <View style={[styles.containerLoading, {justifyContent: 'center'}]} >
            <ActivityIndicator size="large" color="green"/>
        </View>
    }
    return (
        <View style={styles.container}>
            <View style={styles.status}>
                <LinearGradient colors={['#f200a2', '#a612e6','#3d43f2',]} 
                style={styles.status} angle={90} useAngle={true}>  
                    <Icon
                    raised
                    reverse
                    name='reply'
                    color='#169144'
                    onPress={() => navigation.pop()} />
                    <Text style={styles.header}>Questions</Text>
                </LinearGradient>
            </View>
            <FlatList
                keyExtractor={item=>item.question}
                data={data}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('Question', {data: item})}>
                        <Tile question={item.question} leng={item.answer.length} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLoading:{
        width: wp(100),
        height: hp(100),
        flex: 1,
        backgroundColor: '#363636',
    },  
    container:{
        width: wp(100),
        height: hp(100),
        flex: 1,
        backgroundColor: '#363636',
        alignItems: 'center'
    }, 
    item:{
        backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(90),
        minHeight: 40,
        borderRadius: 6,
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
    },
    itemText:{
        marginLeft: 20,
        color: 'white',
        fontSize: 23,
        maxWidth: wp(60)
    },
    status:{
        width: wp(100),
        height: hp(10),
        borderBottomRightRadius: wp(20),
        backfaceVisibility: 'hidden',
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
    }
})
    