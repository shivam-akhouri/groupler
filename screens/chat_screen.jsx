import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MessageTile from '../components/messageTile';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function ChatScreen({navigation, route}){
    const [input, setInput] = React.useState("");
    const [name, setName] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [messages, setMessages] = React.useState([]);
    // console.log(route.params);
    React.useEffect(()=>{
        firestore().collection('Users').doc(auth().currentUser.uid).get()
        .then(res=>{
            var result = res.data();
            setName(result.name);
        });
        firestore().collection('Message').doc(route.params.id).collection('message')
        .orderBy('time', 'desc').limit(400).onSnapshot(querySnapshot=>{
            var data = [];
            querySnapshot.forEach(documentSnapshot=>{
                data.push({key: documentSnapshot.id, ...documentSnapshot.data()});
            });
            console.log(data);
            setMessages(data);
            setLoading(false);
        })

    }, [])
    if(loading){
        return(
            <View style={[styles.container, {justifyContent: 'center'}]} >
                <ActivityIndicator size="large" color="green"/>
            </View> 
        );
    }
    return (
        <View style = {styles.container}>
            <View style={styles.status}>
                <LinearGradient colors={['#f200a2', '#a612e6','#3d43f2',]} 
                style={styles.status} angle={90} useAngle={true}>  
                    <Icon
                    raised
                    reverse
                    name='reply'
                    color='#169144'
                    onPress={() => navigation.pop()} />
                    <Text style={styles.header}>Chat</Text>
                </LinearGradient>
            </View>
            {/* <MessageTile message="Hello this is shivam Akhouri" type="sender"/>
            <MessageTile message="Hello this is shivam Akhouri" type="sender"/>
            <MessageTile message="Hello this is shivam Akhouri  hello mister how do you do?" type="sender"/>
            <MessageTile message="Hello this is shivam Akhouri" type="receiver"/>
            <MessageTile message="Hello this is shivam Akhouri" type="receiver"/>
            <MessageTile message="Hello this is shivam Akhouri  hello mister how do you do?" type="receiver"/> */}
            <FlatList
                inverted
                style={{marginBottom: hp(10)}}
                data={messages}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>{}} >
                        <MessageTile message={item.message} type={name==item.name? 'sender':'receiver'} sender={name==item.name?"You":item.name} />
                    </TouchableOpacity>
                )}
            />
            <View style={styles.input}>
                <TextInput value={input} onChangeText={val=>setInput(val)} style={styles.inputStyle} numberOfLines={1} placeholder="Enter Text Message" placeholderTextColor="#a5a5a5"/>
                <Icon
                    raised
                    name='send'
                    color='#ff6805'
                    onPress={() =>{
                        firestore().collection('Message').doc(route.params.id).collection('message').add({
                            name: name,
                            message: input,
                            time: new Date(),
                        });
                        setInput("");
                    }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262626',
        flex: 1,
        width: wp(100),
        height: hp(100)
    }, 
    inputStyle:{
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#454545',
        color: 'white',
        fontSize: 15,
        paddingLeft: 10,
        paddingRight: 10,
        width: wp(78),
        height: 50
    },
    input: {
        position: 'absolute',
        bottom: 0,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: wp(100),
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