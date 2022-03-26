import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ImageBackground, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Assets, Colors, Image, TouchableOpacity, Typography, Button} from "react-native-ui-lib";
import Input from "../../components/TextField/input";
import InputPassword from "../../components/TextPasswordField/input";
import { RootStackParamList } from "../nav/RootStack";

const SignUp = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    return (
        <View flex>
            <ImageBackground 
                source={Assets.icons['bgSignUp']}
                style={{flex: 1}}
            >
                <View flex-2 centerV>
                    <Text white title2b marginL-40>SIGN UP</Text>                    
                </View>

                <Input iconLeft={'name'} placeHolder={'Name'} keyboardType='default'></Input>
                <Input iconLeft={'email'} placeHolder={'E-mail'} keyboardType='default'></Input>
                <InputPassword iconLeft={'password'} placeHolder={'Password'} ></InputPassword>
                <View marginH-40 marginT-20>
                    <Button 
                            label='SIGN UP' 
                            backgroundColor={Colors.primary} 
                            color={Colors.n3}
                            labelStyle={Typography.b16}
                            onPress={() => {}}
                        />
                </View>
                <View marginH-40 marginT-20>
                    <Button 
                            label='SIGN IN' 
                            backgroundColor={Colors.primary} 
                            color={Colors.white}
                            labelStyle={Typography.b16}
                            onPress={() => {navigation.navigate('SignIn')}}
                            link
                        />
                </View>
                <View flex-1></View>
                <View flex-2></View>
            </ImageBackground>
        </View>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    txt_forgot: {
        marginTop: 16,
        marginBottom: 32,
        alignSelf: 'flex-end',
        marginRight: 40
    }
})