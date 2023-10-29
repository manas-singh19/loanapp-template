import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, PixelRatio, Alert} from 'react-native'  
 
// interface Button{
//     width:number,
//     height:number,
//     label:string,
//     loanid:any
// }

// icons  
import Icon from 'react-native-vector-icons/MaterialIcons';
import Gift from 'react-native-vector-icons/Octicons'; 

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

interface Header{ 
    id:string
    navigation:any
}
const ExtraOffers = ({navigation}:Header)=>{ 
     
    return (
        <TouchableOpacity style={[styles.ExtraOffersBox]} onPress={()=>navigation.navigate('OfferScreen')}>
            <View style={styles.ExtraIcon}>
                <View style={styles.ExtraIconBox}>
                    <Gift name='gift' size={22} />
                </View> 
            </View> 
            <View style={styles.ExtraContent}>
                <Text style={styles.ExtraTitle}>Credit Limit & Discount</Text>
                <Text style={styles.ExtraPara}>Increase your Credit and reduce Pricing for your loan limit.</Text>
            </View>
            <View style={styles.ExtraIconLast}>
                <Icon name='arrow-forward-ios' size={24} color={"#FFCE29"} />
            </View>  
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ExtraOffersBox:{
        width:'100%',
        height:95,
        backgroundColor:'#fff', 
        flexDirection:'row',
        marginBottom:12,
        borderRadius:6,
        borderWidth:1,
        borderColor:'#ddd'
    },
    ExtraIcon:{
        width:'20%',
        height:'100%', 
        justifyContent:"flex-start",
        alignContent:'center',
        alignItems:'center',
        padding:paddings.xxsm
    },
    ExtraIconBox:{
        width:45,
        height:45, 
        borderRadius:22,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#ddd'
    },
    ExtraContent:{
        width:'66%',
        height:'100%', 
        padding:paddings.xxsm,
        flexDirection:'column'
    },
    ExtraTitle:{
        fontSize:getFontSize(fontSizes.lg),
        fontWeight:'600',
        color:"#000",
        marginBottom:8
    },
    ExtraPara:{
        fontSize:getFontSize(fontSizes.sm), 
        lineHeight:getFontSize(fontSizes.lg), 
        color:"#212121", 
    },
    ExtraIconLast:{
        width:'14%',
        height:'100%', 
        padding:paddings.xxsm, 
        justifyContent:"center",
        alignContent:'center',
        alignItems:'center'
    }

})


export default ExtraOffers;
