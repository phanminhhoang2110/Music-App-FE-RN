import React from "react";
import { View, Text, Assets, Colors, Button, Typography} from "react-native-ui-lib";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../nav/RootStack";

const ThroughWalk = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View flex>
            <ImageBackground 
                source={Assets.icons['bgThroughwalk']} 
                style={styles.container}
            >
                <Text title3b white>Welcome to Hoang App</Text>
                <Text r14 white>Male your design workflow easier and save your time</Text>
            </ImageBackground>

            <View absB marginH-16 absH marginB-16>
                <SafeAreaView>
                    <Button 
                        label="GET STARTED" 
                        backgroundColor={Colors.primary} 
                        color={Colors.n3}
                        labelStyle={Typography.b16}
                        onPress={() => navigation.navigate('SignIn')}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
}

export default ThroughWalk;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black
    }
})