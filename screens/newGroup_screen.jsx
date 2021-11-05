import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Alert, FlatList } from 'react-native';
import {Button} from 'react-native-elements';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import { createNewGroup } from '../firebase-repository/group';

function handleCreateGroup(name, participants){
    var res = createNewGroup(name, participants);
    if(res){
        alert("Group Created Successfully!!");
    }else{
        alert("Some Error occured");
    }
}

export default function NewGroupScreen(props){
    const [name, setName] = React.useState("");
    const [username, setUserName]  = React.useState("");
    const [participants, addParticipant] = React.useState([]);
    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.textinput} placeholder="Enter Group Name" value={name} onChangeText={val=>setName(val)}/>
                <TextInput style={styles.textinput} placeholder="Enter username or email of the participant" value={username} onChangeText={val=>setUserName(val)} />
                <Button title="Add Member" buttonStyle={{backgroundColor: 'green'}} />
            </View>
            <View>
            <FlatList
                data={participants}
                renderItem={({ item }) => (
                    <Tile title={item.name} participants={item.participants.length} scheduled={item.scheduled}/>
                )}
            />
            </View> 
            <View style={styles.createGroup} >
                <Button title="Create Group" buttonStyle={{width: wp(90)}} onPress={()=>handleCreateGroup(name, participants)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        backgroundColor: '#262626',
        alignItems: 'center',
    },
    textinput:{
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#e67132',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 25,
        paddingLeft: 20,
        paddingRight: 15,
        height: 50,
        width:wp(90),
    },
    createGroup:{
        position: 'absolute',
        width: wp(100),
        bottom:  hp(15),
        alignItems:'center',
        justifyContent: 'center'
    }
})