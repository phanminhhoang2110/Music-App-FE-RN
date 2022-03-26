import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Platform } from "react-native";
import { StyleSheet, FlatList, TouchableOpacity, ScrollView, ImageBackground, ActivityIndicator } from "react-native";
import { View, Text, Assets, Image } from "react-native-ui-lib";
import Video from 'react-native-video';
import { RootStackParamList } from "../nav/RootStack";

const dataHome = [
    {
        id: 0,
        name: 'Nice For What',
        author: 'Avinci John',
        uri: Assets.imgs.dataHome1,
    },
    {
        id: 1,
        name: 'Where can I get some ?',
        author: 'Arian Grande',
        uri: Assets.imgs.dataHome2,
    },
    {
        id: 2,
        name: 'Why do we use it ?',
        author: 'Alan Walker',
        uri: Assets.imgs.dataHome3,
    },
    {
        id: 3,
        name: 'Fall Out Boys',
        author: 'Avinci John',
        uri: Assets.imgs.dataHome4,
    },
    {
        id: 4,
        name: 'Fall Out Boys',
        author: 'Avinci John',
        uri: Assets.imgs.dataHome4,
    },
    {
        id: 5,
        name: 'Fall Out Boys',
        author: 'Avinci John',
        uri: Assets.imgs.dataHome4,
    }
];

const dataNewAlbum = [
    {
        uri: Assets.imgs.newAlbum1,
        name: 'Tháng 4',
        author: 'Phan Minh Hoàng'
    },
    {
        uri: Assets.imgs.newAlbum2,
        name: 'Tháng 5',
        author: 'Phan Minh Hoàng'
    },
    {
        uri: Assets.imgs.newAlbum2,
        name: 'Tháng 6',
        author: 'Phan Minh Hoàng'
    }
]
const Home = () => {
    const [loading,setLoading] = React.useState(true);
    return (
        <View flex backgroundColor="#0E0B1F">
            <FlatList
                contentContainerStyle={{ paddingBottom: Platform.OS == 'android' ? 80 : 120 }}
                data={dataHome}
                renderItem={({item, index})=>{
                    return (
                    <TouchableOpacity key={item.id}>
                        <View row centerV paddingH-24 paddingV-10>
                            <Text white r14>0{index + 1}</Text>
                            <Image source={item.uri} style={{width: 32, height: 32}}  marginH-20/>
                            <View flex>
                                <Text white r16>{item.name}</Text>
                                <Text color="#817A7A" r12>{item.author}</Text>
                            </View>
                            <TouchableOpacity>
                                <Image  source={Assets.icons.iconOption} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>)
                }}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return (
                        <View>
                            <View row centerV spread paddingV-20 paddingH-24>
                                <Text white title5b>New Album</Text>
                                <Text 
                                    white 
                                    b12
                                    onPress={() => {}}    
                                >View all</Text>
                            </View>
                            <View height={200}>
                                <ScrollView 
                                    horizontal 
                                    showsHorizontalScrollIndicator={false} 
                                    style={{paddingLeft:14}}
                                >
                                    {dataNewAlbum.map((item, index)=>{
                                        return <View width={200} height={200} marginH-10>
                                            <ImageBackground 
                                                source={item.uri}
                                                style={{
                                                    width:188, 
                                                    height: 188, 
                                                    justifyContent: 'flex-end'
                                                }}
                                            >
                                                <Text b16 white marginL-16>{item.name}</Text>
                                                <Text marginB-8 marginL-16 white r12>{item.author}</Text>
                                            </ImageBackground>
                                            <View
                                              style={{ 
                                                position: 'absolute', 
                                                bottom: 0, 
                                                right: 0, 
                                                zIndex: -1,
                                                borderRadius: 5,
                                                overflow: 'hidden'
                                              }}  
                                            >
                                            <Image 
                                                source={item.uri}
                                                style={{
                                                    width:188, 
                                                    height: 188
                                                }}
                                                blurRadius={10}
                                            />
                                            </View>
                                        </View>
                                    })}
                                </ScrollView>
                            </View>

                            <View paddingV-20 paddingL-24>
                                <Text title5b white>Geez Album</Text>
                            </View>

                            <View height={188} marginH-24>
                                {
                                    loading && <View flex center>
                                        <ActivityIndicator color='#FFF'/>
                                        <Text r12 white marginT-4>Loading</Text>
                                    </View>
                                }
                                <Video
                                    source={{
                                        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                                    }}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                    onError={(error) => {
                                        console.log(error)
                                    }}
                                    controls={true}
                                    poster={'https://baconmockup.com/300/200/'}
                                    onReadyForDisplay={()=>{
                                        setLoading(false)
                                    }}
                                />
                            </View>

                            <View paddingV-20 paddingL-24>
                                <Text title5b white>Recent Music</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({})