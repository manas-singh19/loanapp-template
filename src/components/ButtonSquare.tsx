import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Platform, NativeModules, PixelRatio, Alert} from 'react-native'  


interface Button{
    width:any,
    height:number,
    label:string,
    loanid:any,
    type:string
}

// fonts 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 

// components
const SquareButton = ({width,height,label,loanid,type}:Button)=>{  
    
    return (
        <View onTouchStart={()=>alert("click")} style={[styles.button,{width:width,height:height,marginBottom:12},type == "fill"?styles.btnfill:styles.btnoutline]}>
            <Text style={[styles.buttonText,type == "fill"?styles.btnfillText:styles.btnoutlineText]}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{ 
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:"center",
        borderRadius:6,
        borderWidth:2
    },
    buttonText:{
        textTransform:'uppercase',
        color:'#fff',
        fontWeight:'500',
        fontSize:getFontSize(14)
    }, 
    btnfill:{
        backgroundColor:'#9C34C2',
        borderColor:'#9C34C2', 
    },
    btnfillText:{

    },
    btnoutline:{
        backgroundColor:'#ddd', 
        borderColor:'#757575'
    },
    btnoutlineText:{
        color:"#212121"
    }
})

export default SquareButton;