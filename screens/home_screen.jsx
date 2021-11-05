import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function Home(props){
    return (
        <>
            <Text>This is Homepage</Text>
            <Button title="Profile" onPress={() =>props.navigation.navigate('Profile')}></Button>
            <Button title="Groups" onPress={() =>props.navigation.navigate('Groups')}></Button>
            <Button title="New Group" onPress={() =>props.navigation.navigate('NewGroup')}></Button>
            <Button title="New" onPress={() =>props.navigation.navigate('Join New Group')}></Button>
            <Button title="Question" onPress={() =>props.navigation.navigate('Question')}></Button>
            <Button title="Timer" onPress={() =>props.navigation.navigate('Timer')}></Button>
            <Button title="Camera" onPress={() =>props.navigation.navigate('Camera')}></Button>
            <Button title="CreateQuestion" onPress={() =>props.navigation.navigate('CreateQuestion')}></Button> 
            <Button title="Room" onPress={() =>props.navigation.navigate('Rooms')}></Button> 
            <Button title="Login" onPress={() =>props.navigation.navigate('Login')}></Button> 
            <Button title="Chat" onPress={() =>props.navigation.navigate('Chat')}></Button> 
        </>
    );
}