import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, PixelRatio} from 'react-native'  
// icons 
import Icon from 'react-native-vector-icons/Entypo'; 

// styles 
import { colors } from '../styles/color';
import { paddings } from '../styles/padding';
import { fontSizes } from '../styles/fontSize';
import { fontWeights } from '../styles/fontWeight';

interface Header{
    screenname:string,
    backscreen:string,
    navigation:any
}

// pixels ratio 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 



const HeaderBack = ({screenname,backscreen,navigation}:Header)=>{  

    return ( 
        <View style={styles.Header}>
                <TouchableOpacity style={styles.backButton} onPress={()=>navigation.navigate(backscreen)}>
                    <Icon name='chevron-left' size={18}/>
                </TouchableOpacity>
                <Text style={styles.HeaderTitle}>{screenname}</Text>
                <TouchableOpacity style={[styles.backButton,{borderColor:'transparent'}]}></TouchableOpacity>
        </View> 
    )
}
 
const styles = StyleSheet.create({ 
    Header:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        height:50,   
        padding:paddings.xxsm,  
        backgroundColor:"#fff"
    },
    backButton:{
        width:35,
        height:35,
        borderRadius:32, 
        borderWidth:1,
        borderColor:'#ddd', 
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    HeaderTitle:{
        fontSize:getFontSize(fontSizes.md),
        fontWeight:'600',
        textTransform:'capitalize'
    }

  });
  


export default HeaderBack;