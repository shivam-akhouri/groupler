import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function CustomStatusBar(){
    return(
        <>
            <View style={styles.container}>
                <Text>Some Heading</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "blue",
      width: wp(100),
      height: hp(8),
      borderBottomRightRadius: 20,
    },
  });
  