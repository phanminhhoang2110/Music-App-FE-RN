import React, { useState } from "react";
import { Keyboard, TextInput, TouchableOpacity } from "react-native";
import {Text, View, Colors, Assets } from "react-native-ui-lib";
import { SafeAreaView } from 'react-native'
import History from "./history";
import TabSearch from "./tab-search";

const searchHistory = [
    {
        id: 1,
        name: 'Fall out boy'
    },
    {
        id: 2,
        name: 'Good girl'
    }
];

const artist = [
    {
        'name': 'Johnny Scott',
        'avatar': Assets.images.artist1,
        'type': 'artist'
    },
    {
        'name': 'Hoang Scott',
        'avatar': Assets.images.artist2,
        'type': 'artist'
    },
    {
        'name': 'Run run run',
        'avatar': Assets.images.artist1,
        'type': 'mv',
        'artist': 'Avinci John'
    },
    {
        'name': 'Rulia and Remé',
        'avatar': Assets.images.artist2,
        'type': 'mv',
        'artist': 'Sunny'
    },
    {
        'name': 'Rommate 01',
        'avatar': Assets.images.artist3,
        'type': 'mv',
        'artist': 'Chain John'
    },
    {
        'name': 'Running on the rain',
        'avatar': Assets.images.artist4,
        'type': 'mv',
        'artist': 'Reena Hook'
    },
    {
        'name': 'Just for what',
        'avatar': Assets.images.artist5,
        'type': 'mv',
        'artist': 'Baemin'
    }
]

const Search = () => {
    const [cancel,setCancel] = useState(false);
    const [search, setSearch] = useState('');

    onCancelPress = () => {
        Keyboard.dismiss()
        setCancel(false)
        setSearch('')
    }

    onChangeSearch = (e) => {
        setSearch(e.nativeEvent.text)
    }

    return (
        <SafeAreaView style={{backgroundColor: '#0E0B1F', flex: 1}}>
            <View row style={{marginStart: 10, marginEnd: 10, marginTop: 20}}>
                <TextInput
                    value={search}
                    style={{color: 'white', backgroundColor: "#292D39", height: 40 ,width: cancel ? '85%' : '100%',borderWidth: 2, borderRadius: 6, paddingStart: 10}} 
                    placeholder={'Search'}
                    onFocus={() => setCancel(true)}
                    onChange={onChangeSearch}
                ></TextInput>
                {   cancel &&
                    <TouchableOpacity onPress={onCancelPress}>
                        <Text color={Colors.primary} style={{marginTop: 15, marginLeft: 10}}>Cancel</Text>
                    </TouchableOpacity>
                }
            </View>
            <History searchHistory={searchHistory}></History>
            <TabSearch data={artist}></TabSearch>
        </SafeAreaView>
    );
}

export default Search;