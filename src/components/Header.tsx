import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, PixelRatio} from 'react-native'  
// icons 
import Icon from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/AntDesign';
// styles 
import { colors } from '../styles/color';
import { paddings } from '../styles/padding';
import { fontSizes } from '../styles/fontSize';
import { fontWeights } from '../styles/fontWeight';

interface Header{
    username:string,
    navigation:any
}

// pixels ratio 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 

const Header = ({username,navigation}:Header)=>{ 

    const [isNewNotification,setIsNewNotification] = useState(true);

    // get new notification status from server 
    useEffect(()=>{

    },[isNewNotification])

    return (
             <View style={styles.Header}>
                <View style={[styles.UserIconBox]}> 
                    <View style={styles.UserIconA}>
                        <IconA name="user" size={18} color="#000"/>
                    </View> 
                    <Text style={{fontSize:getFontSize(fontSizes.md)}}>Hello, <Text style={{fontSize:getFontSize(fontSizes.md),fontWeight:'600'}}>{username}</Text></Text>
                </View>
                <TouchableOpacity style={styles.NotificationBellBox} onPress={()=>navigation.navigate('notification')} >    

                    {
                        isNewNotification&&(
                            <View style={{position:'absolute',top:4,left:15,width:10,height:10,backgroundColor:'red',borderRadius:25}}></View> 
                        )
                    } 

                    <Icon style={styles.NotificationBell} name="notifications-outline" size={18} color="#000"/>
                </TouchableOpacity>       
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
    },
    UserIconBox:{  
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
    },
    UserIconA:{
        width:35,
        height:35,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',  
        borderRadius:32, 
        borderWidth:1,
        borderColor:'#ddd',
        marginRight:6
    },
    NotificationBellBox:{  
        width:35,
        height:35,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',  
        borderRadius:32, 
        borderWidth:1,
        borderColor:'#ddd'
    },
    NotificationBell:{  
    }

  });
  


export default Header;