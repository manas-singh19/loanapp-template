import React, { useEffect, useState , useRef} from 'react'
import { View, Text, StyleSheet, Image,Dimensions,PixelRatio ,TouchableOpacity,Animated, ImageBackground} from 'react-native'   
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// compoents 
import SquareButton from '../../components/ButtonSquare';
import LoanCard from '../../components/LoanCard';

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

  //start: main states for section  
  const [detial,setDetail] = useState({
    one:true,
    two:false,
    three:false,
    four:false
  })
  const miniMenuHandler = (statename:string,condition:boolean)=>{ 
    // setDetail((preState:any)=>({
    //   ...preState,
    //   [statename]:condition
    // }))
    if(statename == 'one'){
      return setDetail({
        one:true,
        two:false,
        three:false,
        four:false
      })
    }
    if(statename == 'two'){
      return setDetail({
        one:false,
        two:true,
        three:false,
        four:false
      })
    }
    if(statename == 'three'){
      return setDetail({
        one:false,
        two:false,
        three:true,
        four:false
      })
    }
    if(statename == 'four'){
      return setDetail({
        one:false,
        two:false,
        three:false,
        four:true
      })
    }
  } 
  //end: main states for section 


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
       

          <TouchableOpacity style={[styles.iconBox,{position:'relative'}]} onPress={()=>miniMenuHandler('one',true)}> 
              <IconProfile name='profile' size={getFontSize(28)} color="#000"/>
              {detial.one&&(
                <View style={{width:'46%',height:3,backgroundColor:'#171717',position:'absolute',bottom:0,borderRadius:12}}></View>
              )} 
          </TouchableOpacity>

          <TouchableOpacity style={[styles.iconBox,{position:'relative'}]}  onPress={()=>miniMenuHandler('two',true)}> 
              <IconLoan name='currency-ils' size={getFontSize(28)} color="#000"/>
              {detial.two&&(
                <View style={{width:'46%',height:3,backgroundColor:'#171717',position:'absolute',bottom:0,borderRadius:12}}></View>
              )} 
          </TouchableOpacity> 

          <TouchableOpacity style={[styles.iconBox,{position:'relative'}]} onPress={()=>miniMenuHandler('three',true)}> 
              <IconFeatures name='trending-up' size={getFontSize(28)} color="#000"/>
              {detial.three&&(
                <View style={{width:'46%',height:3,backgroundColor:'#171717',position:'absolute',bottom:0,borderRadius:12}}></View>
              )} 
          </TouchableOpacity>  

          <TouchableOpacity style={[styles.iconBox,{position:'relative'}]} onPress={()=>miniMenuHandler('four',true)}> 
              <IconFeatures name='settings' size={getFontSize(28)} color="#000"/>
              {detial.four&&(
                <View style={{width:'46%',height:3,backgroundColor:'#171717',position:'absolute',bottom:0,borderRadius:12}}></View>
              )} 
          </TouchableOpacity>

       </Animated.View>
      </Animated.View>
    )
  }
  // end: userimagonmenu

  // start: Profile 
  const [profile,setProfile] = useState({
    fullname:'Manas Singh',
    email:'singhmanas998@gmail.com',
    phone:'7888388017',
    address:'Kapurthala, Punjab',
    city:'Kapurthala',
    zipcode:'144620'
  })
  // input handler 
  const ProfileHandler = (statename:any,e:any) => {   
    console.log({statename,value:e.nativeEvent.text})
    setProfile((prevState) => ({
      ...prevState,
      [statename]: e.nativeEvent.text,
    }));
  };
  // submpt form 
  const SaveProfile = ()=>{
    
  }
  // end: Profile 



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
              scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
              style={{paddingTop:(HEADER_HEIGHT*2)+40,paddingBottom:(HEADER_HEIGHT*2)+120,backgroundColor:'#f0f0f0'}}
            >         
                  {/* {DATA.map((book, index) => {
                    return (                
                        <Text style={styles.scrollText} key={book.id}>{book.title}</Text>                
                    )
                  })}        */}
                  {detial.one&&( 
                    <View style={{width:'100%',minHeight:500,padding:paddings.md,flexDirection:'column',backgroundColor:'#f0f0f0'}}>
                        <View style={[styles.profileDetails,{backgroundColor:'#f0f0f0'}]}>
                            <Text style={[styles.headerText]}>Edit Profile</Text>
                            <View style={{flexDirection:'column',marginBottom:12}}>
                              <TextInput style={[styles.inputText]} defaultValue={profile.fullname}  onChange={data=>ProfileHandler("fullname",data)}  placeholderTextColor='#141414' placeholder="Fullname"/> 
                            </View>
                            <View style={{flexDirection:'column',marginBottom:12}}>
                              <TextInput style={[styles.inputText]} defaultValue={profile.email}  onChange={data=>ProfileHandler("email",data)}  placeholderTextColor='#141414'  placeholder="Email"/>
                            </View>
                            <View style={{flexDirection:'column',marginBottom:12}}>
                              <TextInput style={[styles.inputText]} defaultValue={profile.phone} onChange={data=>ProfileHandler("phone",data)}  placeholderTextColor='#141414' placeholder='Phone number'/>
                            </View> 
                            <View style={{flexDirection:'column',marginBottom:12}}>
                              <TextInput style={[styles.inputText]} defaultValue={profile.address}  onChange={data=>ProfileHandler("address",data)}   placeholderTextColor='#141414'  placeholder="Address"/>
                            </View> 
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:12}}>
                              <TextInput style={[styles.inputText,{width:'47.5%'}]} defaultValue={profile.city}  onChange={data=>ProfileHandler("city",data)}  placeholderTextColor='#141414' placeholder='City'/>  
                              <TextInput style={[styles.inputText,{width:'47.5%'}]} defaultValue={profile.zipcode}  onChange={data=>ProfileHandler("zipcode",data)} placeholderTextColor='#141414' placeholder='Zip Code'  /> 
                            </View>
                            <View style={{flexDirection:'column',justifyContent:'flex-end',alignContent:"flex-end",alignItems:'flex-end',marginBottom:12}}>
                              <SquareButton width="49%" height={(height - (height / 3)) / 8 } type="fill" label="Save" loanid="000" />
                            </View>
                        </View>
                    </View>
                  )}
                  {detial.two&&( 
                    <View style={{width:'100%',minHeight:500,backgroundColor:'#f0f0f0',padding:paddings.md,flexDirection:'column'}}>
                      <View style={[styles.profileDetails,{backgroundColor:'#f0f0f0',padding:0}]}>
                         <Text style={[styles.headerText]}>Istant Loan</Text>

                         <LoanCard loanamount={2000} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={12} /> 
                         <LoanCard loanamount={2000} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={12} /> 
                         <LoanCard loanamount={2000} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={12} /> 
                         <LoanCard loanamount={2000} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={12} /> 
                         <LoanCard loanamount={2000} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={12} /> 
                         
                      </View>
                    </View>
                  )}
                  {detial.three&&(
                    <View style={{width:'100%',minHeight:300,backgroundColor:'#f0f0f0',padding:paddings.md,flexDirection:'column'}}>
                        <View style={[styles.profileDetails,{backgroundColor:'#f0f0f0',padding:0}]}>
                          <Text style={[styles.headerText]}>Current Loan</Text>
                          <Text style={{ }}>No Current loan running, 
                             <Text onPress={()=>miniMenuHandler('two',true)} style={{color:'#9C34C2',fontWeight:'600'}}>Browse Loan</Text>
                          </Text>
                        </View>
                    </View> 
                   )}
                   {detial.four&&( 
                    <View style={{width:'100%',minHeight:300,backgroundColor:'#f0f0f0',padding:paddings.md,flexDirection:'column'}}>
                        <View style={[styles.profileDetails,{backgroundColor:'#f0f0f0',padding:0}]}>
                          <Text style={[styles.headerText]}>Change Setting</Text> 
                           
                          
                          <TouchableOpacity><Text style={[styles.settingText]}>Constat Us</Text></TouchableOpacity>
                          <TouchableOpacity><Text style={[styles.settingText]}>Legal Notice</Text></TouchableOpacity>
                          <TouchableOpacity><Text style={[styles.settingText]}>Terms & Conditions</Text></TouchableOpacity>
                          <TouchableOpacity><Text style={[styles.settingText]}>Sing Out</Text></TouchableOpacity>
                          
                        </View>
                    </View> 
                   )}
                  <View style={{width:'100%',height:500,backgroundColor:'#f0f0f0'}}></View>
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
  },
  profileDetails:{
    width:'100%', 
    minHeight:30, 
  },
  headerText:{
    fontSize:getFontSize(fontSizes.md),
    fontWeight:'600',
    color:'#000',
    marginBottom:12,
  },
  inputText:{ 
    padding:paddings.md,
    fontSize:fontSizes.md,
    borderWidth:2,
    borderColor:'#141414',
    borderRadius:6, 
    marginBottom:6
  },
  settingText:{
    width:'100%',
    backgroundColor:'#fff',
    padding:paddings.xlg,
    fontSize:fontSizes.md,
    marginBottom:8,
    borderRadius:6
  }
});
  

export default ProfileScreen;