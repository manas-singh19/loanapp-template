import React, { useState } from 'react'
import { View, Text, StyleSheet, Image,Dimensions,PixelRatio, TouchableOpacity } from 'react-native'   
import { ScrollView } from 'react-native-gesture-handler' 
import { useNavigation } from '@react-navigation/native'; 
// icons  
import Icon from 'react-native-vector-icons/MaterialIcons';
 

// Dimenstions 
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// fonts 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 

// styles   
import { paddings } from '../styles/padding';
import { fontSizes } from '../styles/fontSize'; 

interface ItemData {
    id: string;
    title: string;
    content:string, 
};

const NotificationBox = ({id,title,content}:ItemData)=>{
    const navigation = useNavigation(); 
    return (
        <TouchableOpacity style={styles.notificationBox} id={id} >
            <View style={styles.icon}>
                <View style={{width:45,height:45,justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:'#dae0ef',borderRadius:23}}>
                    <Icon name="app-registration" size={fontSizes.xxxxlg} color="#000"/>
                </View> 
            </View>
            <View style={styles.contentNotifi}>
                <Text style={{fontSize:getFontSize(fontSizes.md),fontWeight:'600',marginBottom:3}}>{title}</Text>
                <Text style={{fontSize:getFontSize(fontSizes.sm),fontWeight:'400'}}>{content}</Text>
            </View>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({ 
    notificationBox:{
        width:'100%',
        minHeight:60,
        backgroundColor:'#fff',
        borderRadius:6,
        borderWidth:1,
        borderColor:'#ddd',
        marginBottom:12,
        flexDirection:'row', 
        padding:paddings.xxsm
    },
    icon:{
        width:'15%',
        height:'100%',  
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center', 
    },
    contentNotifi:{
        flexDirection:'column',  
        width:'85%',
        paddingLeft:paddings.xsm
    }
})
export default NotificationBox;