import React from "react";
import { Dimensions } from "react-native";
import { View } from "react-native-ui-lib";

const AddToPlaylist = () => {
    const width = Dimensions.get('window').width
    return (
        <View width={width} flex backgroundColor="blue"></View>
    )
}

export default AddToPlaylist