import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export async function getUserDetails(){
    return await firestore().collection('Users').doc(auth().currentUser.uid).get().then(
        res=>{
            return res.data();
        }
    );
}