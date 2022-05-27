import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, ImageBackground, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, Assets, Colors, Image, TouchableOpacity, Typography, Button} from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../components/TextField/input";
import InputPassword from "../../components/TextPasswordField/input";
import { login } from "../../redux/slices/login.slice";
import { RootStackParamList } from "../nav/RootStack";

const SignIn = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const {isLogin} = useSelector((state: any) => state.login)
    const dispatch = useDispatch()

    const loginPress = () => {
        if(!mail || !pass){
            Alert.alert('Login', 'Vui lòng đăng nhập !')
        }
        dispatch(login({username: mail}))
        navigation.navigate('MainTab')
    }
    return (
        <View flex>
            <ImageBackground 
                source={Assets.icons['bgSignIN']}
                style={{flex: 1}}
            >
                <View flex-2 centerV>
                    <Text white title2b marginL-40>SIGN IN</Text>                    
                </View>

                <Input {...{value: mail, onChangeText: setMail}} iconLeft={'email'} placeHolder={'E-mail'} keyboardType='default'></Input>
                <InputPassword {...{value: pass, onChangeText: setPass}}  iconLeft={'password'} placeHolder={'Password'} ></InputPassword>
                <Text
                    white
                    r14
                    style={styles.txt_forgot}
                    onPress={() =>{navigation.navigate('ForgotPassword')}}
                >
                    Forgot Password ?
                </Text>
                <View marginH-40>
                    <Button 
                            label='SIGN IN' 
                            backgroundColor={Colors.primary} 
                            color={Colors.n3}
                            labelStyle={Typography.b16}
                            onPress={loginPress}
                        />
                </View>
                <View flex-1></View>
                <View flex-2>
                    <View row centerV marginH-40 marginB-16>
                        <View flex height={1} backgroundColor={'#8D92A3'}></View>
                        <Text color="#8D92A3" marginH-16 b16>Or connect with</Text>
                        <View flex height={1} backgroundColor={'#8D92A3'}></View>
                    </View>   
                    <View row center>
                        <TouchableOpacity>
                            <Image assetName="facebook"/>    
                        </TouchableOpacity>
                        <TouchableOpacity marginH-16>
                            <Image assetName="twitter"/>    
                        </TouchableOpacity>  
                        <TouchableOpacity>
                            <Image assetName="google_plus"/>    
                        </TouchableOpacity>  
                    </View>
                </View>
                <SafeAreaView>
                    <Text white center r14>Don't have an account? <Text onPress={() => {navigation.navigate('SignUp')}} b14 color={Colors.primary}>Sign Up</Text></Text> 
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
    txt_forgot: {
        marginTop: 16,
        marginBottom: 32,
        alignSelf: 'flex-end',
        marginRight: 40
    }
})