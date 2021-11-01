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
          <Stack.Screen name="Join New Group" component={NewGroupScreen}></Stack.Screen>
          <Stack.Screen name="Question" component={QuestionScreen}></Stack.Screen>
          <Stack.Screen name="Timer" component={Timer}></Stack.Screen>
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
