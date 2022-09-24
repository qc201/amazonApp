import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
interface ButtonProps {
    text: string,
    onPress : () => void,
    containerStyles?: object
}
const Button = ({text, onPress, containerStyles} : ButtonProps) => {

    return (

            <Pressable onPress={onPress} style={[style.root, containerStyles]}>
                <Text style={style.text}>{text}</Text>
            </Pressable>
    )
    }

const style = StyleSheet.create({
    root:{
        backgroundColor:'#e47911',
        marginVertical:10,
        height:35,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#a15e2b',

    },
    text:{
        fontSize:16,
        textAlign:'center',
    },
})

export default Button;