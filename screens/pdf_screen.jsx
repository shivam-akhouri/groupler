import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import PDFView from 'react-native-view-pdf/lib/index';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';

export default function PdfScreen({route, navigation}){
    console.log(route.params.path)
    return(
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
                    <Text style={styles.header}>{route.params.name}</Text>
                </LinearGradient>
            </View>
            <PDFView resource={route.params.path}
                on
                resourceType='url' 
                style={styles.pdf}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        width: wp(100),
        alignItems: 'center',
    },
    pdf:{
        flex:1,
        width: wp(100),
        height: hp(82),
    },
    status:{
        width: wp(100),
        height: hp(10),
        borderBottomRightRadius: wp(20),
        backfaceVisibility: 'hidden',
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
})