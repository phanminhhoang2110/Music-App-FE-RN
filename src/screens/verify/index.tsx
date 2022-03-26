import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, TextInput, Modal } from "react-native";
import { Text, View, Button, Colors,Typography } from "react-native-ui-lib";
import Input from "../../components/TextField/input";
import { RootStackParamList } from "../nav/RootStack";

const widthScreen = Dimensions.get('window').width;
const Verify = () => {
    const marginLeft = new Animated.Value(0);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const refInput2 = useRef();
    const refInput3 = useRef();
    const refInput4 = useRef();
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <View flex backgroundColor="#0E0B1F">
            <Animated.View style={{
                flexDirection: 'row',
                transform: [{
                    translateX: marginLeft
                }]
            }}>
                <View style={{width:widthScreen}}>
                    <Text white title3b marginL-20>To continue enter {'\n'}your phone number</Text>
                    <View marginT-70>
                        <Input iconLeft="phone" placeHolder="Phone" keyboardType="numeric"></Input>
                    </View>
                    <View marginH-40 marginT-32>
                        <Button 
                            label='Continue' 
                            backgroundColor={Colors.primary} 
                            color={Colors.n3}
                            labelStyle={Typography.b16}
                            onPress={()=> {
                                Animated.timing(marginLeft,{
                                    duration: 500,
                                    useNativeDriver: true,
                                    toValue: -widthScreen
                            }).start()}}
                        />
                    </View>
                </View>
                <View style={{width:widthScreen}}>
                    <Text white title3b marginL-20>Verify phone {'\n'}number</Text>
                    <View marginT-70>
                        <View row center>
                            <View style={styles.opt_input}>
                                <TextInput 
                                    keyboardType="numeric" 
                                    maxLength={1} 
                                    style={styles.otp_text}
                                    returnKeyType="next"
                                    onChangeText={() => {refInput2?.current?.focus?.()}}
                                />
                            </View>
                            <View style={styles.opt_input}>
                                <TextInput 
                                    keyboardType="numeric" 
                                    maxLength={1} 
                                    style={styles.otp_text}
                                    ref = {refInput2}
                                    onChangeText={() => {refInput3?.current?.focus?.()}}
                                />
                            </View>
                            <View style={styles.opt_input}>
                                <TextInput 
                                    keyboardType="numeric" 
                                    maxLength={1} 
                                    style={styles.otp_text}
                                    ref = {refInput3}
                                    onChangeText={() => {refInput4?.current?.focus?.()}}
                                />
                            </View>
                            <View style={styles.opt_input}>
                                <TextInput 
                                    keyboardType="numeric" 
                                    maxLength={1} 
                                    style={styles.otp_text}
                                    ref = {refInput4}
                                />
                            </View>
                        </View>
                    </View>
                    <View marginH-40 marginT-32>
                        <Button 
                            label='Continue' 
                            backgroundColor={Colors.primary} 
                            color={Colors.n3}
                            labelStyle={Typography.b16}
                            onPress={()=> {
                                setVisible(true)    
                            }}
                        />
                    </View>
                    <View marginH-40 marginT-32>
                        <Button 
                            label='Resent Code' 
                            backgroundColor={Colors.primary} 
                            color={Colors.white}
                            labelStyle={Typography.b16}
                            link
                        />
                    </View>
                </View>
            </Animated.View>
            <Modal
                animationType="slide"
                //transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(visible);
                }}
            >
                <View flex center backgroundColor="#0E0B1F">
                    <View center>
                        <Text white title3b marginL-20>Almost done!</Text>
                        <Text white r14 marginL-20>Please Verify your Phone</Text>
                    </View>
                    <View marginH-40 marginT-100>
                        <Button 
                            label='Continue' 
                            backgroundColor={Colors.primary} 
                            color={Colors.n3}
                            labelStyle={Typography.b16}
                            onPress={()=>{
                                setVisible(false)
                                navigation.navigate('MainTab')
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Verify;

const styles = StyleSheet.create({
    opt_input: {
        borderBottomWidth: 3,
        borderColor: Colors.rgba(Colors.white, 0.2),
        marginHorizontal: 20
    },
    otp_text: {
        fontSize: 14,
        color: Colors.white,
        textAlign: 'center'
    },
    otp_text_have_text: {
        borderBottomWidth: 3,
        borderColor: Colors.rgba(Colors.n3, 0.2),
        marginHorizontal: 20
    }
});