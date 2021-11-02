import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import {Slider} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import TimerButton from '../components/timerButtons';
import { Icon } from 'react-native-elements';


export default function Timer(){
    const [time, setTime] = React.useState(0);
    const [showTimer, setShowTimer]  = React.useState(true);
    return (
        <>
            <LinearGradient
                    colors={['#1167f0','#76a2f5','#93b7fa']}
                    style={styles.linearGradient}>
                <View style={styles.container}>
                    <Text style={styles.title}>Pick your focus Time:</Text>
                    <Text style={styles.time}>{time} Min.</Text>
                    {showTimer&&
                    <View style={{marginTop: hp(10)}}>
                        <Icon
                            raised
                            name='forward'
                            color='#ff6805'
                            onPress={() => props.func(!props.data)} />
                    </View>
                    }
                    {showTimer &&
                    <Slider 
                        value={time}
                        onValueChange = {(val)=>setTime(val)}
                        minimumValue={0}
                        maximumValue={120}
                        trackStyle={{height: 10, color: '#fff'}}
                        thumbStyle={{height: 30, width: 30}}
                        step={1}
                        minimumTrackTintColor='#d9c562'
                        maximumTrackTintColor='white'
                        thumbTintColor='#ff6ee2'
                        style={styles.slider}
                    />
                    }
                    <View style={{position: 'absolute', bottom : wp(20)}}>
                    <TimerButton data={showTimer} func={setShowTimer}/>
                    </View>
                </View>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    linearGradient:{
        height: hp(100),
        width: wp(100),
    },
    container:{
        alignItems: 'center',
        width: wp(95),
        alignSelf: 'center',
        height: hp(100)
    },
    title:{
        fontSize: wp(12),
        fontFamily: 'Oswald',
        color: '#f2f2f2',
        marginTop: hp(5)
    },
    time: {
        marginTop: hp(10),
        fontSize: 60,
        color: '#f2f2f2',
    },
    slider:{
        width: wp(95),
        marginTop: hp(10),
        margin: hp(8)
    }
})