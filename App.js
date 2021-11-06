import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home_screen';
import ProfileScreen from './screens/profile_screen';
import NewGroupScreen from './screens/newGroup_screen';
import GroupScreen from './screens/group_screen';
import QuestionScreen from './screens/question_screen';
import Timer from './screens/timer_screen';
import CameraScreen from './screens/camera_screen';
import CreateQuestion from './screens/createQuestion_screen';
import RoomScreen from './screens/room_screen';
import GoogleSignIn from './screens/login_screen';
import ChatScreen from './screens/chat_screen';
import PdfScreen from './screens/pdf_screen';
import GroupDetail from './screens/group_details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle:{
              backgroundColor:'#1f1f1e',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight: 'bold',
              fontSize: 40,
            },
            headerTitleAlign: 'center'
          }}
          >
          <Stack.Screen name="Groupler" component={Home}></Stack.Screen>
          <Stack.Screen name="Profile" component={ProfileScreen} ></Stack.Screen>
          <Stack.Screen name="Groups" component={GroupScreen}></Stack.Screen>
          <Stack.Screen name="NewGroup" component={NewGroupScreen}></Stack.Screen>
          <Stack.Screen name="Join New Group" component={NewGroupScreen}></Stack.Screen>
          <Stack.Screen name="Question" component={QuestionScreen}></Stack.Screen>
          <Stack.Screen name="Timer" component={Timer}></Stack.Screen>
          <Stack.Screen name="Camera" component={CameraScreen}></Stack.Screen>
          <Stack.Screen name="CreateQuestion" component={CreateQuestion}></Stack.Screen> 
          <Stack.Screen name="Rooms" component={RoomScreen} ></Stack.Screen>
          <Stack.Screen name="Login" component={GoogleSignIn} ></Stack.Screen>
          <Stack.Screen name="Chat" component={ChatScreen} ></Stack.Screen>
          <Stack.Screen name="Pdf" component={PdfScreen} ></Stack.Screen>
          <Stack.Screen name="GroupDetail" component={GroupDetail} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
