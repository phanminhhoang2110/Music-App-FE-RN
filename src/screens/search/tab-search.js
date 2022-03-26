import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "react-native-ui-lib";

const menu = [
    'All',
    'Artist',
    'MV',
    'Album',
    'Song',
    'Playlist'
]

const TabSearch = () => {

    const [menuItem, setMenuItem] = useState('')

    const onMenuPress = (item) => {
        setMenuItem(item)
    }

    return (
        <View marginT-20>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{marginLeft: 20}}>
                {menu.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => onMenuPress(item)}>
                            <Text r18 style={menuItem == item ? style.categorySelected : style.category}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TabSearch;

const style = StyleSheet.create({
    category: {
        color: 'white',
        marginRight: 40,
    },
    categorySelected: {
        color: 'white',
        marginRight: 40,
        borderBottomWidth: 2,
        borderColor: 'white',
        borderBottomEndRadius: 5,
        fontSize:22, 
        fontFamily: 'Roboto-Bold'
    }
})