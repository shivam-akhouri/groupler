import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button } from 'react-native-elements';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Shimmer from 'react-native-shimmer';

GoogleSignin.configure({
  webClientId: '686843872188-pttd6f6idrv9ebnhplvv7tei30pti43e.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);

  }

export default function GoogleSignIn() {
  return (
      <LinearGradient style={styles.container} colors={['orange', 'green']}>
        <Text style={styles.greet}>Welcome To </Text>
        <Shimmer duration={500}>
          <Text style={styles.logo}>Group</Text>
        </Shimmer>
        <Button
          title="Google Sign-In"
          buttonStyle={styles.signIn}
          onPress={() => {
              onGoogleButtonPress().then(() => {
                console.log('Signed in with Google!');
                console.log("Adding user data");
              
                //Adding user data to the user collection

                //Checking for pre existence
                let userData = auth().currentUser;
                firestore().collection('Users').doc(userData.uid).get().then(res=>{
                    if(!res.exists){
                        firestore()
                        .collection('Users')
                        .doc(userData.uid)
                        .set({
                            uid: userData.uid,
                            name: userData.displayName,
                            email: userData.email,
                            phoneNumber: userData.phoneNumber,
                            photoUrl: userData.photoURL,
                            level: "0",
                            status: "Online",
                            skillBadge: "Uchi Deshi",
                            focusTime: 0,
                            groups: [],
                            totalTime: 0,
                            averageTime: 0,
                        })
                        .then(() => {
                            console.log('User added!');
                        });
                    }
                })
                });
            }}
          />
        <Shimmer duration={500}>
        <Text style={styles.logo}>Ler</Text>
        </Shimmer>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#303030',
    alignItems: 'center',
    width: wp(100),
    height: hp(100),
  },
  signIn:{
    width: wp(90),
    backgroundColor: '#3A7AFF'
  },
  logo:{
    color: 'white',
    fontSize: wp(40),
    fontFamily: 'Oswald'
  },
  greet:{
    color: 'white',
    fontSize: wp(10),
  }
})