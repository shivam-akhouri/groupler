import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Alert, FlatList } from 'react-native';
import {Button} from 'react-native-elements';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import { createNewGroup } from '../firebase-repository/group';

function handleCreateGroup(name, participants){
    var people = [];
    participants.forEach(val=>people.push(val.key))
    var res = createNewGroup(name, people);
    if(res){
        alert("Group Created Successfully!!");
    }else{
        alert("Some Error occured");
    }
}

function handleAddUser(username, participants, setUserName, setParticipant){
    setParticipant([...participants, {key: username}]);
    setUserName("");
}

export default function NewGroupScreen(props){
    const [name, setName] = React.useState("");
    const [username, setUserName]  = React.useState("");
    const [participants, addParticipant] = React.useState([]);
    return(
        <View style={styles.container}>
            <View>
                <TextInput style={styles.textinput} placeholderTextColor="#d5d5d5" placeholder="Enter Group Name" value={name} onChangeText={val=>setName(val)}/>
                <TextInput style={styles.textinput} placeholderTextColor="#d5d5d5" placeholder="Enter username or email of the participant" value={username} onChangeText={val=>setUserName(val)} />
                <Button title="Add Member" buttonStyle={{backgroundColor: '#06EA1D'}} onPress={()=>handleAddUser(username, participants, setUserName, addParticipant)}/>
            </View>
            <View>
            <FlatList
                style={styles.list}
                data={participants}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item.key}</Text>
                    </View>
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
        backgroundColor: '#454545',
        color: 'white',
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
    },
    item:{
        backgroundColor: 'orange',
        width: wp(90),
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        marginBottom: 5,
    },
    itemText:{
        marginLeft: 20,
        color: 'white',
        fontSize: 23,
    },
    list: {
        marginTop: 20,
        maxHeight: hp(50)
    }
})