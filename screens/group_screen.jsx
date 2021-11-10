import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, FlatList, Pressable, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Tile from '../components/tile2';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';


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
            <View style={styles.body}>
                <View style={styles.status}>
                    <LinearGradient colors={['#f200a2', '#a612e6','#3d43f2',]} 
                    style={styles.status} angle={90} useAngle={true}>  
                        <Icon
                        raised
                        reverse
                        name='reply'
                        color='#169144'
                        onPress={() => props.navigation.pop()} />
                        <Text style={styles.header}>Groups</Text>
                    </LinearGradient>
                </View>
                <View style={styles.container}>
                    {/* <Tile title="Group Tittle" participants={20} scheduled="yes"/> */}
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>{
                                console.log(item)
                                props.navigation.navigate('GroupDetail', {id: item.key})}} >
                                <Tile title={item.name} participants={item.participants.length} scheduled={item.scheduled}/>
                            </TouchableOpacity>
                        )}
                    />
                    <View style={styles.design} >
                        <LinearGradient style={styles.shape} colors={['#f200a2', '#a612e6', '#3d43f2', '#d92929']}></LinearGradient>

                    </View>
                </View>
            </View>
        );  
}

const styles = StyleSheet.create({
    body:{
        width: wp(100),
        height: hp(100),
        backgroundColor: 'black',
    },
    container:{
        width: wp(100),
        height: hp(87),
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },  
    shape:{
        height: hp(60),
        backgroundColor: 'orange',
        width: wp(12),
        borderBottomLeftRadius: wp(50),
        borderTopLeftRadius: wp(50)
    },
    design:{
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: wp(13), 
        height: hp(100)
    },
    status:{
        width: wp(100),
        height: hp(10),
        borderBottomRightRadius: wp(20),
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