import React from "react";
import { Dimensions, ImageBackground } from "react-native";
import { Image, Text, View, Assets } from "react-native-ui-lib";

const Lyric = () => {
    const {width, height} = Dimensions.get('window')
    return (
        <View flex width={width}>
            <ImageBackground 
                source={Assets.icons['bgSignIN']}
                style={{flex: 1}}
            ></ImageBackground>
        </View>
    );
}

export default Lyric;