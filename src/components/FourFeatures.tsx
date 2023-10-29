import React, { useState } from 'react'
import { View, Text, StyleSheet, Image,Dimensions,PixelRatio } from 'react-native'  

// icons  
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconO from 'react-native-vector-icons/Octicons';

// Dimenstions 
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// fonts 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 

// styles  
import { paddings } from '../styles/padding';
import { fontSizes } from '../styles/fontSize'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const FourFeatures = ()=>{
    return (
        <>
            <TouchableOpacity style={styles.BoxItem} onPress={()=>alert('Extra Fatures')}>
                <Icon name='speedometer-outline'  size={45} color="#000"/>
                <Text style={styles.BoxItemText}>credit score</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BoxItem} onPress={()=>alert('Extra Fatures')}>
                <IconM name='gold'  size={45} color="#000"/>
                <Text style={styles.BoxItemText}>25K Gold</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.BoxItem} onPress={()=>alert('Extra Fatures')}>
                <IconM name='doctor'  size={45} color="#000"/>
                <Text style={styles.BoxItemText}>Health Care</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BoxItem} onPress={()=>alert('Extra Fatures')}>
                <IconO name='cross-reference'  size={45} color="#000"/>
                <Text style={styles.BoxItemText}>Refer</Text>
            </TouchableOpacity> 
        </>
    )
}

const styles = StyleSheet.create({  
    BoxItem:{
        width:(width / 4) - 6 ,
        height:90, 
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    BoxItemText:{
        fontSize:getFontSize(fontSizes.sm),
        marginTop:6,
        textTransform:'capitalize'
    }, 
});
  

export default FourFeatures;