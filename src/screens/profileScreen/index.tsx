import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image,Dimensions,PixelRatio ,TouchableOpacity} from 'react-native'   
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
 
 

// icons 
import Icon from 'react-native-vector-icons/Entypo'; 

// Dimenstions 
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// fonts 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 

// styles 
import { colors } from '../../styles/color';
import { paddings } from '../../styles/padding';
import { fontSizes } from '../../styles/fontSize';
import { fontWeights } from '../../styles/fontWeight'; 
 

interface Header{
  screenname:string, 
  navigation:any
} 

// Main Screen
const ProfileScreen = ()=>{
  const navigation = useNavigation(); 
  
  const [minimenu,setMiniMenu] = useState<boolean>(false);

    // screen menu  
  const HeaderTab = ({screenname, navigation}:Header)=>{   
    return (  
        <View style={styles.Header}>
                <TouchableOpacity style={[styles.backButton,{borderColor:'transparent'}]}>
                    {/* <Icon name='chevron-left' size={18}/> */}
                </TouchableOpacity>
                <Text style={styles.HeaderTitle}>{screenname}</Text>
                <TouchableOpacity style={[styles.backButton]} onPress={()=>setMiniMenu(!minimenu)}>
                    <Icon name='dots-three-horizontal' size={22}/>
                </TouchableOpacity>
        </View>   
    )
  }

    return (
      <GestureHandlerRootView style={styles.HomeContainer}>
          <HeaderTab screenname="Manas Singh" navigation={navigation}/> 
          {minimenu&&
            <View style={[styles.minimenu,{}]}> 
              <TouchableOpacity style={[styles.minimenuTab]}><Text style={styles.minimenuText}>Setting</Text></TouchableOpacity> 
              <TouchableOpacity style={[styles.minimenuTab]}><Text style={styles.minimenuText}>Setting</Text></TouchableOpacity> 
              <TouchableOpacity style={[styles.minimenuTab]}><Text style={styles.minimenuText}>Contact Us</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.minimenuTab,{marginBottom:0}]}><Text style={styles.minimenuText}>Sign Out</Text></TouchableOpacity>
            </View> 
          }   
          <ScrollView style={styles.scrollView} scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={[styles.userimageonmenu]}>

            </View>
          </ScrollView>
      </GestureHandlerRootView>  
    )
}

const styles = StyleSheet.create({
  HomeContainer: { 
    paddingBottom:0,
    overflow:'hidden',
    backgroundColor:'#fff',
    height:height,
    position:'relative'
  },
  scrollView: {
      backgroundColor: '#f0f0f0',  
      position:'relative'
  },
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
      minHeight:120,
      padding:8,
      borderRadius:6,
      backgroundColor:'#fff',
      position:'absolute',
      right:8, 
      top:58,
      zIndex:1,
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 12},
      shadowOpacity: 0.04,
      shadowRadius: 6
  },
  minimenuTab:{ 
    padding:12,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#F9F8F8', 
    borderRadius:3,
    marginBottom:8 
  },
  minimenuText:{
    fontSize:fontSizes.sm,
    fontWeight:"400", 
  },
  userimageonmenu:{

  }
});
  

export default ProfileScreen;