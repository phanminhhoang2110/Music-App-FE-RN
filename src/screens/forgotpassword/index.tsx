import { Animated, Dimensions, StyleSheet } from "react-native";
import { View, Text, Button, Colors, Typography } from "react-native-ui-lib";
import React from "react";
import Input from "../../components/TextField/input";
import InputPassword from "../../components/TextPasswordField/input";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../nav/RootStack";

const widthScreen = Dimensions.get('window').width;
const ForgotPassword = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const marginLeft = new Animated.Value(0);
    return (
        <View flex backgroundColor="#0E0B1F">
            <Text white title3b margin-24 >Forgot Password?</Text>
            <Text color="#8D92A3" r12 marginL-24 marginB-24>
                If you need help resetting your password, {'\n'}we can help by sending you a link to {'\n'}reset it.
            </Text>

            <Animated.View
                style={{
                    flexDirection: 'row',
                    transform: [
                        {
                            translateX: marginLeft
                        }
                    ]
                }}
            >
                <View style={{width: widthScreen, height:200}}>
                    <Input iconLeft={'email'} placeHolder="E-mail" keyboardType='default'></Input>
                    <View marginH-40 marginT-32>
                        <Button 
                                label='Next' 
                                backgroundColor={Colors.primary} 
                                color={Colors.n3}
                                labelStyle={Typography.b16}
                                onPress={() => {
                                    Animated.timing(marginLeft, {
                                        duration: 500,
                                        useNativeDriver: true,
                                        toValue: -widthScreen
                                    }).start();
                                }}
                            />
                    </View>
                </View>
                <View style={{width: widthScreen, height:200}}>
                    <InputPassword iconLeft={'password'} placeHolder="Password"></InputPassword>
                    <InputPassword iconLeft={'password'} placeHolder="Re-Password"></InputPassword>
                    <View marginH-40 marginT-32>
                        <Button 
                                label='SEND' 
                                backgroundColor={Colors.primary} 
                                color={Colors.n3}
                                labelStyle={Typography.b16}
                                onPress={() => {
                                    navigation.navigate('Verify')
                                }}
                            />
                    </View>
                </View>
            </Animated.View>


        </View>
    );
};

export default ForgotPassword;

const styles = StyleSheet.create({});