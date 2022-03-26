import React, { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Text, View, Assets, Image } from "react-native-ui-lib";
import TabSearchItem from "./tab-search-item";

const menu = [
    'All',
    'Artist',
    'MV',
    'Album',
    'Song',
    'Playlist'
]

const TabSearch = ({data, query}) => {

    const [menuItem, setMenuItem] = useState('All')

    const onMenuPress = (item) => {
        setMenuItem(item)
    }

    const filterData = (rawData, filterQuery, menuItem) => {
        if(menuItem != 'All'){
            filterDataByType = rawData.filter((item) => {
                console.log(item)
                return item.type == menuItem
            })
        }else{
            filterDataByType = rawData;
        }
        if(filterQuery){
            return filterDataByType.filter((item) => {
                return item.name.includes(query) || item.artist?.includes(query);
            })
        }else{
            return filterDataByType
        }
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
            <View>
                <Text white b20 marginL-20 marginT-20>Top Searching</Text>
                <View>
                    <FlatList
                    contentContainerStyle={{ paddingBottom: Platform.OS == 'android' ? 80 : 120 }}
                    data={filterData(data, query, menuItem)}
                    renderItem={({item, index})=>{
                        return (
                        <TouchableOpacity key={item.id}>
                            <View row centerV paddingH-24 paddingV-10>
                                <Text white r14>0{index + 1}</Text>
                                <Image assetName={item.avatar} style={{width: 32, height: 32}}  marginH-20/>
                                <View flex>
                                    <Text white r16>{item.name}</Text>
                                    <Text color="#817A7A" r12>{item.artist}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image  source={Assets.icons.iconOption} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>)
                    }}
                    keyExtractor={item => item.id}
                    />
                </View>
            </View>
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