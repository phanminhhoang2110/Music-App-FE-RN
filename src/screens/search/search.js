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
        'id': 1,
        'name': 'Johnny Scott',
        'avatar': 'artist1',
        'type': 'Artist'
    },
    {
        'id': 2,
        'name': 'Hoang Scott',
        'avatar': 'artist2',
        'type': 'Artist'
    },
    {
        'id': 3,
        'name': 'Run run run',
        'avatar': 'artist1',
        'type': 'MV',
        'artist': 'Avinci John'
    },
    {
        'id': 4,
        'name': 'Rulia and Remé',
        'avatar': 'artist2',
        'type': 'MV',
        'artist': 'Sunny'
    },
    {
        'id': 5,
        'name': 'Rommate 01',
        'avatar': 'artist3',
        'type': 'MV',
        'artist': 'Chain John'
    },
    {
        'id': 6,
        'name': 'Running on the rain',
        'avatar': 'artist4',
        'type': 'Song',
        'artist': 'Reena Hook'
    },
    {
        'id': 7,
        'name': 'Just for what',
        'avatar': 'artist5',
        'type': 'MV',
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
            { !search ? <History searchHistory={searchHistory}></History> : <TabSearch data={artist} query={search}></TabSearch> }
        </SafeAreaView>
    );
}

export default Search;