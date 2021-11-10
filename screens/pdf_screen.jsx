import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Alert } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import PDFView from 'react-native-view-pdf/lib/index';

export default function PdfScreen(){
    return(
        <View style={styles.container}>
            <PDFView resource={'https://firebasestorage.googleapis.com/v0/b/group-97e7c.appspot.com/o/Lab%20Exercise%203%20shivam%20Akhouri%2020brs1095.pdf?alt=media&token=20777a39-9331-42e9-8cfa-518e47fadf3e'}
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
        height: hp(100),
    }
})