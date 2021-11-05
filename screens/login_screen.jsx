import React from 'react';
import { Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
      <>
    <Button
      title="Google Sign-In"
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
    <Button
      title="sign OUt"
      onPress={()=>{auth()
        .signOut()
        .then(() => console.log('User signed out!'));}
      }
    />
    </>
  );
}