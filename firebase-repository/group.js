import firestore from '@react-native-firebase/firestore';
import { getUserDetails } from './Users';
import auth from '@react-native-firebase/auth';

export async function createNewGroup(groupName, participants){
    return await firestore().collection('Groups').add({
        name: groupName,
        creatorId: auth().currentUser.uid,
        question: [],
        participants: [auth().currentUser.email],
        createdOn: new Date().toUTCString(),
        scheduled: 'No'
    }).then(res=>{
        return true;
    }).catch(err=> {
        return false;
    })
}

export async function getGroups(){
    return firestore().collection('Groups').where("participants", "array-contains", auth().currentUser.email);
}
getGroups();