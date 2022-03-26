import React from "react";
import { Text, View } from "react-native-ui-lib";

const TabSearchItem = ({item}) => {
    return (
        <View>
            <Text white>
                {item.name}
            </Text>
        </View>
    );
}

export default TabSearchItem;