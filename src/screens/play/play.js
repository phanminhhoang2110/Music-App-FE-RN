import React from "react";
import { SafeAreaView, Animated, Easing, TouchableOpacityBase, TouchableOpacity } from "react-native";
import { Image, View, Text } from "react-native-ui-lib";


const radius = 150;
const circumference = radius * 2 * Math.PI

const Player = () => {

    const spinValue = new Animated.Value(0)

    const onPlayPress = () => {
        // Animated.loop(
            Animated.timing(
              this.spinValue,
              {
               toValue: 1,
               duration: 3000,
               easing: Easing.linear,
               useNativeDriver: true
              }
            // )
        ).start();
    }

    return (
        <SafeAreaView style={{backgroundColor: '#0E0B1F', flex: 1}}>
            <Animated.View centerH style={{transform: [{rotate: 
            spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            })}] 
    }}>
                <Image style={{borderRadius: 500, borderColor: 'white', borderWidth: 1}} assetName="bgSignUp" height={300} width={300}></Image>
            </Animated.View>
            <TouchableOpacity onPress={onPlayPress}>
                <Text white>Play</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Player;