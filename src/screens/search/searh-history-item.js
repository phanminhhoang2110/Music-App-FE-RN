import React from "react";
import { TouchableOpacity } from "react-native";
import { Assets, Colors, Text, View } from "react-native-ui-lib";

const SearchHistoryItem = ({title, negative = false}) => {
    return (
        <TouchableOpacity>
            <View style={{borderWidth: 1, borderColor: Colors.primary, borderRadius: 6, marginEnd: 10, marginTop: 5, backgroundColor: negative ? Colors.primary : ''}}>
                <Text color={ negative ? 'black' : Colors.primary} style={{padding: 5}}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default SearchHistoryItem;