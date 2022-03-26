import React from "react";
import { ImageBackground, StyleSheet, TextInput } from "react-native";
import { Text, View, Assets, Colors, Image, TouchableOpacity} from "react-native-ui-lib";

interface Props {
    iconLeft: string 
    placeHolder: string,
    keyboardType: string,
}

const Input = ({iconLeft, placeHolder, keyboardType = "default"} : Props) => {
    return (
        <View style={styles.container}>
            <View width={24} height={24} center margin-16>
                <Image assetName={iconLeft} />
            </View>
            <TextInput
                keyboardType={keyboardType}
                placeholder={placeHolder}
                placeholderTextColor={'#9F9F9F'}
                style={styles.input}
            />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 40,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: Colors.rgba(Colors.white, 0.2)
    },
    input: {
        fontSize: 14,
        color: Colors.white,
        
    }
});