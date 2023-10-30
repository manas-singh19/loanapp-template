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
    navigation:any
}

// pixels ratio 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 


// main compoents 
const HeaderTab = ({screenname, navigation}:Header)=>{  

    const [minimenu,setMiniMenu] = useState<boolean>(true);

    return ( 
        <>
            <View style={styles.Header}>
                    <TouchableOpacity style={[styles.backButton,{borderColor:'transparent'}]}>
                        {/* <Icon name='chevron-left' size={18}/> */}
                    </TouchableOpacity>
                    <Text style={styles.HeaderTitle}>{screenname}</Text>
                    <TouchableOpacity style={[styles.backButton]} onPress={()=>alert('show box')}>
                        <Icon name='dots-three-horizontal' size={22}/>
                    </TouchableOpacity>
            </View> 
            <View style={styles.minimenu}>

            </View>
        </>
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
        width:45,
        height:35,   
        borderColor:'#ddd', 
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    HeaderTitle:{
        fontSize:getFontSize(fontSizes.md),
        fontWeight:'600',
        textTransform:'capitalize'
    },
    minimenu:{
        width:'50%',
        height:90,
        backgroundColor:'red',
        position:'absolute',
        right:10, 
    }
  });
  


export default HeaderTab;