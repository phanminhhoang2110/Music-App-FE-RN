import React from "react";
import {Text, View} from "react-native-ui-lib";
import SearchHistoryItem from "./searh-history-item";


const History = ({searchHistory}) => {
    return (
        <View>
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
        </View>
    );
}

export default History;