import React, { useState } from "react";
import { Keyboard, TextInput, TouchableOpacity } from "react-native";
import {Text, View, Colors } from "react-native-ui-lib";
import SearchHistoryItem from "./searh-history-item";
import { SafeAreaView } from 'react-native'

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
            <View marginL-20 marginT-40 centerV>
                <Text white title5b>History</Text>
                <View row marginT-20 style={{flexWrap: 'wrap'}}>
                    {searchHistory.map((item, index) => {
                        return (
                            <SearchHistoryItem key={index} title={item.name}></SearchHistoryItem>
                        );
                    })}
                </View>
            </View>
            <View marginL-20 marginT-40 centerV>
                <Text white title5b>Top Searching</Text>
                <View row marginT-20 style={{flexWrap: 'wrap'}}>
                    {searchHistory.map((item, index) => {
                        return (
                            <SearchHistoryItem negative={true} key={index} title={item.name}></SearchHistoryItem>
                        );
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Search;