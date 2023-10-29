import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform, NativeModules, PixelRatio, Alert} from 'react-native'  

interface Button{
    width:number,
    height:number,
    label:string,
    loanid:any
}

// fonts 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 


const Button = ({width,height,label,loanid}:Button)=>{  
    return (
        <View onTouchStart={()=>alert(loanid)} style={[styles.button,{width:width,height:height}]}>
            <Text style={styles.buttonText}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#9C34C2',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:"center",
        borderRadius:25
    },
    buttonText:{
        textTransform:'uppercase',
        color:'#fff',
        fontWeight:'500',
        fontSize:getFontSize(14)
    }
})

export default Button;