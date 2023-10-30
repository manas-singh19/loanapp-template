import React, { useEffect, useState , useRef} from 'react'
import { View, Text, StyleSheet, Image,Dimensions,PixelRatio ,TouchableOpacity,Animated, ImageBackground} from 'react-native'   
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
 

// icons 
import Icon from 'react-native-vector-icons/Entypo'; 
import IconProfile from 'react-native-vector-icons/AntDesign'; 
import IconLoan from 'react-native-vector-icons/MaterialCommunityIcons'; 
import IconFeatures from 'react-native-vector-icons/Feather'; 
 

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
  navigation:any, 
} 

interface Userimagonmenu{
  animHeaderValue:any
}

import DATA from '../../utlits/data';

// Main Screen
const ProfileScreen = ()=>{
  const navigation = useNavigation(); 
  
  const [minimenu,setMiniMenu] = useState<boolean>(false);
  

  let scrollOffsetY = useRef(new Animated.Value(0)).current;  
    
  //start: screen menu
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
  //end: screen menu
  const HEADER_HEIGHT = 90;
  // start: userimagonmenu
  const Userimagonmenu = ({animHeaderValue}:Userimagonmenu)=>{
    
    const insets = useSafeAreaInsets(); 

    // header Height -- top menu 
    const headerHeightTop = animHeaderValue.interpolate({
      inputRange: [0, HEADER_HEIGHT + insets.top],
      outputRange: [(HEADER_HEIGHT + insets.top)+60, insets.top],
      extrapolate: 'clamp'
    });
   
    // header Height -- bottom menu / main menu 
    const headerHeight = animHeaderValue.interpolate({
      inputRange: [0, HEADER_HEIGHT + insets.top],
      outputRange: [(HEADER_HEIGHT + insets.top)-18, insets.top + 66], 
      extrapolate: 'clamp'
    });

    // background Color -- chnage the color 
    const animateHeaderBackgroundColor = animHeaderValue.interpolate({
      inputRange: [0, HEADER_HEIGHT - HEADER_HEIGHT],
      outputRange: ['#fff', '#fff'],
      extrapolate: 'clamp'
    });
 
    
    return (
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
          // backgroundColor: animateHeaderBackgroundColor
        }}
      >
       <Animated.View style={[styles.UserEditProfile,{width:'100%',height:headerHeightTop,backgroundColor:animateHeaderBackgroundColor}]}> 
            <Image style={{borderRadius:12, width:'16%', height:'45%',marginBottom:8}} source={require('../../../assets/userprofile.png')}/>
            <Text style={styles.UserEditProfileName}>Manas Singh</Text> 
            <Text style={styles.UserEditProfileEmail}>Singhmanas998@gmail.com</Text> 
       </Animated.View>
       <Animated.View style={{width:'100%', height:headerHeight, flexDirection:'row', backgroundColor:'#fff', shadowColor: '#212121', shadowOffset: [0,1], shadowOpacity: 0.1, shadowRadius:1}}>  
       
       
          <View style={[styles.iconBox]}> 
              <IconProfile name='profile' size={getFontSize(26)} color="#000"/>
          </View>

          <View style={[styles.iconBox]}>
              <IconLoan name='currency-ils' size={getFontSize(26)} color="#000"/>
          </View> 

          <View style={[styles.iconBox]}>
              <IconFeatures name='trending-up' size={getFontSize(26)} color="#000"/>
          </View>  

          <View style={[styles.iconBox]}>
              <IconFeatures name='settings' size={getFontSize(26)} color="#000"/>
          </View>

       </Animated.View>
      </Animated.View>
    )
  }
  // end: userimagonmenu

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
        <View style={{backgroundColor:'#fff'}}> 
            <Userimagonmenu animHeaderValue={scrollOffsetY}/>
            {/* <ScrollView style={styles.scrollView}   scrollEventThrottle={16} scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
              <View style={[styles.userimageonmenu]}>

              </View>
            </ScrollView> */} 
            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
                {useNativeDriver: false}
              )}
              style={{paddingTop:(HEADER_HEIGHT*2)+40,backgroundColor:'#f0f0f0'}}
            >         
                  {DATA.map((book, index) => {
                    return (                
                        <Text style={styles.scrollText} key={book.id}>{book.title}</Text>                
                    )
                  })}       
            </ScrollView>
        </View>
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
  },
  scrollText: {            
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000'
  },
  UserEditProfile:{
     justifyContent:'center',
     alignContent:'center',
     alignItems:'center'
  }, 
  UserEditProfileName:{
    fontSize:getFontSize(18),
    fontWeight:'600',
    marginBottom:4
  },
  UserEditProfileEmail:{
    fontSize:getFontSize(14),
    fontWeight:'500',
    marginBottom:4
  },
  iconBox:{
    width:'25%',
    height:'100%',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center', 
    backgroundColor:'#fff' 
  }
});
  

export default ProfileScreen;