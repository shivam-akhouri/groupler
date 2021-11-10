import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';

function Tile({image, title, loop, width, height, progress}){
    return(
        <View style={styles.tile}>
            <LottieView source={image} autoPlay loop={loop} style={{height: height? height: hp(10), width: wp(20)}} progress={progress? progress: 1}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}
const data = [
    {id: 'a', value: require('../assets/profile.json'), title: 'Profile', screen:'Profile', loop: false, progress: 1},
    {id: 'b', value: require('../assets/groups.json'), title: 'Groups', screen: 'Groups',  loop: false, },
    {id: 'c', value: require('../assets/addGroup.json'), title: 'Add Group', screen: 'NewGroup',  loop: false},
    {id: 'd', value: require('../assets/suggestion.json'), title: 'Suggestion', screen: 'Profile', loop : false},
    {id: 'e', value: require('../assets/about.json'), title: 'About', screen: 'Timer', loop : true},
    {id: 'f', value: require('../assets/logout.json'), title: 'Logout', screen: 'Login', loop: false},
];

export default function Homepage({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.status}>
                <LinearGradient colors={['#eb05a2', '#6f198c']} style={styles.status} angle={180} useAngle={true}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
                        <LottieView source={require('../assets/logo.json')} loop={true} autoPlay style={{height: hp(12), marginLeft: wp(3)}}/>
                        <Text style={styles.brand}>Groupler</Text>
                    </View>
                    <View style={styles.greet}>
                        <Text style={styles.greetText} numberOfLines={1}>Hi! {auth().currentUser.displayName}</Text>
                    </View>
                </LinearGradient>
            </View>
            <View style={{flexDirection: 'row', marginTop: hp(2)}}> 
                <View style={styles.design}>
                    <LinearGradient style={styles.shape} colors={['#f200a2', '#a612e6', '#3d43f2', '#d92929']}></LinearGradient>
                </View>
                <View style={styles.align}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={data}
                        renderItem={({item})=>(
                                <View style={styles.addMargin}>
                                    <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} >
                                            <Tile image={item.value} title={item.title} loop={item.loop} width={item.width} height={item.height}/>
                                    </TouchableOpacity>
                                </View>
                        )}
                        keyExtractor={item=>item.id}
                        numColumns={2}
                    />
                </View>
            </View>
            
            <View style={styles.footer}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: wp(100),
        height: hp(100),
        backgroundColor: 'black',
    },
    brand:{
        color: '#ebebeb',
        alignSelf: 'flex-start',
        fontSize: wp(13),
        fontFamily: 'Oswald',
        marginRight: wp(5)
    },
    status:{
        width: wp(100),
        height: hp(20),
        // borderBottomRightRadius: hp(10),
        borderBottomLeftRadius: hp(10)
    },
    greet:{
        alignItems: 'flex-end',
    },
    greetText:{
        color: '#f5f5f7',
        fontFamily: 'Oswald',
        fontSize: wp(10),
        // textShadowOffset: {width: 3, height: 3},
        // textShadowColor: 'white',
        // textShadowRadius: 20,
        marginRight: wp(5)
    },
    align:{
        width: wp(82),
        // marginLeft: wp(18),
        maxHeight: hp(80),
        alignItems: 'center'
    },
    tile:{
        width: wp(36),
        height: hp(17),
        backgroundColor: '#4d4f4d',
        padding: 5,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#855cd1',
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontFamily: 'Oswald',
    },
    addMargin:{
        padding:3,
        borderWidth: 2,
        borderRadius: 25,
        margin: 4,
        borderColor: '#cc0433',
    },
    design:{
        width: wp(16),
        justifyContent: 'center',
        alignItems:'flex-start',
    },
    shape:{
        height: hp(45),
        backgroundColor: 'orange',
        width: wp(12),
        borderBottomRightRadius: wp(50),
        borderTopRightRadius: wp(50)
    }
})