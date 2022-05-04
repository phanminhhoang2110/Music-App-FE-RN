import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import AddToPlaylist from "./addToPlaylist";
import Lyric from "./lyric";
import Player from "./play";

const ContainerPlayer = () => {
    const {width, height} = Dimensions.get('window')
    return (
        <View flex>
            <Player/>
        </View>
    )
}

export default ContainerPlayer;

const style = StyleSheet.create({
    dot: {
      width: 15,
      height: 4,
      backgroundColor: 'gray',
      borderRadius: 3,
      marginLeft: 5,
      marginRight: 5
    },
    seletedDot: {
      width: 15,
      height: 4,
      backgroundColor: 'white',
      borderRadius: 3,
      marginLeft: 5,
      marginRight: 5
    }
});