import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, FlatList, Pressable, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';


export default function FileScreen({navigation, route}){
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    React.useEffect(()=>{
        firestore()
        .collection('Groups')
        .doc(route.params.id)
        .get()
        .then(res=>{
            var result = res.data();
            if(result.files)
                setData(result.files);
            console.log(data);
            setLoading(false);
        })
    }, []);
    async function handleUpload(){
        try{
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf,
                    DocumentPicker.types.doc,
                    DocumentPicker.types.docx,
                    DocumentPicker.types.pptx,
                    DocumentPicker.types.plainText,      
                ],
            });
            console.log(
                res[0].uri
            );
            let filepath = res[0].uri;
            let cloudPath = route.params.id+"/files/"+new Date()+".pdf";
            var storageRef = storage().ref(cloudPath);
            const upload = storageRef.putFile(filepath);
            upload.then(async ()=>{
                console.log("Image uploaded");
                const url = await storage().ref(cloudPath).getDownloadURL();
                firestore().collection('Groups')
                .doc(route.params.id).get()
                .then(resu=>{
                    var result = resu.data().files;
                    if(result){
                        console.log("Reached if block")
                        firestore().collection('Groups')
                        .doc(route.params.id)
                        .update({
                            'files':[...result, {
                                'name':res[0].name,
                                'path': url,
                            }]
                        }).then(()=>console.log("upload successful"));
                    }else{
                        console.log('reached else block');
                        firestore().collection('Groups')
                        .doc(route.params.id)
                        .update({
                            'files':[{
                                'name':res[0].name,
                                'path': url,
                            }]
                        }).then(()=>console.log("upload successful"));
                    }
                })
            });
            // const url = await storage().ref(cloudPath).getDownloadURL();
            // console.log(url);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User Exited");
            } else {
                throw err
            }
        }
    }
    if(loading){
        return(
            <View style={[styles.container, {justifyContent: 'center'}]} >
                <ActivityIndicator size="large" color="green"/>
            </View> 
        );
    } 
    return (
        <View style={styles.container}>
            <View style={styles.status}>
                <LinearGradient colors={['#f200a2', '#a612e6','#3d43f2',]} 
                style={styles.status} angle={90} useAngle={true}>  
                    <Icon
                    raised
                    reverse
                    name='reply'
                    color='#169144'
                    onPress={() => navigation.pop()} />
                    <Text style={styles.header}>Files</Text>
                </LinearGradient>
            </View>
            <View style={styles.listFile} >
            <FlatList
                contentContainerStyle={styles.list}
                data={data}
                renderItem={({item})=>(
                    <View style={styles.tile}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Pdf', {path: item.path, name: item.name})}>
                            <View style={styles.innertile}>
                                <LottieView source={require('../assets/file.json')} autoPlay loop={false} style={{height: hp(14), width: wp(20)}}/>
                                <View style={styles.texttile}>
                                    <Text style={styles.text} numberOfLines={2}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item=>item.id}
                numColumns={2}
            />
            </View>
            <View style = {styles.footer}> 
                <TouchableOpacity onPress={()=>handleUpload()}>
                    <LottieView source={require('../assets/addfile.json')} autoPlay loop={false} style={{height: hp(12)}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        backgroundColor: 'black',
        alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: wp(6.),
    },
    innertile:{
        backgroundColor: '#303030',
        alignItems: 'center',
        padding: hp(0.5),
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#5822b5',
        margin: hp(0.5)
    },
    tile:{
        borderRadius: 13,
        borderWidth: 2,
        margin: 5,
        borderColor: '#b52222',
        width: wp(40),
        height: hp(25.5)
    },
    list:{
        alignItems: 'center',
        maxWidth: wp(100),
    },
    footer:{
        width: wp(100),
        backgroundColor: '#454545',
        alignItems: 'center',
        height: hp(12),
        borderTopLeftRadius: wp(100),
        borderTopRightRadius: wp(100),
    },
    listFile:{
        width: wp(100),
        height: hp(76),
    },
    texttile:{
        height: hp(8.3),
        justifyContent: 'center'
    },
    status:{
        width: wp(100),
        height: hp(10),
        borderBottomRightRadius: wp(20),
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
});