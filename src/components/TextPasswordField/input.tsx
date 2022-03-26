import React from "react";
import { ImageBackground, StyleSheet, TextInput } from "react-native";
import { Text, View, Assets, Colors, Image, TouchableOpacity} from "react-native-ui-lib";

interface Props {
    iconLeft: string 
    placeHolder: string
}

const InputPassword = ({iconLeft, placeHolder} : Props) => {
    const [show, setShow] = React.useState<boolean>(true);

    return (
        <View style={styles.container}>
            <View width={24} height={24} center margin-16>
                <Image assetName={iconLeft} />
            </View>
            <TextInput 
                secureTextEntry= {show}
                placeholder={placeHolder}
                placeholderTextColor={'#9F9F9F'}
                style={{fontSize: 14, color: Colors.white, flex: 1}}
            />
            <TouchableOpacity style={{height: 24, width: 24}} paddingT-30 center onPressIn={() => {setShow(false)}} onPressOut={() => {setShow(true)}}>
                <Image source={Assets.icons['eye']}/>
            </TouchableOpacity>
        </View>
    );
}

export default InputPassword;

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