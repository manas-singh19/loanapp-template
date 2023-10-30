import {
  SafeAreaView, StatusBar, StyleSheet, Text, View , 
  Platform, NativeModules, PixelRatio
} from 'react-native'; 
import { useState } from 'react'; 
const { StatusBarManager } = NativeModules;

import { BlurView } from 'expo-blur';

// navigations 
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// screens 
import AuthScreen from './src/screens/authScreen'; 
import LoadingScreen from './src/screens/loadingScreen';
import ProfileScreen from './src/screens/profileScreen';


import HomeScreen from './src/screens/homeScreen';
import NotificationScreen from './src/screens/notification'; 
import OfferScreen from './src/screens/currentOffersScreen';

// icon 
import Icon from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuBlur = () => {
  return ( 
      <View
        style={{  
          width:'100%',
          height: 60,  
          borderRadius:6,
          borderTopColor: 'white',
          borderBottomColor: 'white',
          overflow: 'hidden',
        }}
      >
        <BlurView
          intensity={10} 
          blurReductionFactor={10}
          style={{ flex: 1, backgroundColor: ' rgba(0, 0, 0, 0.1)', 
         }}
        />
      </View> 
  );
};

const App = () => {
    
  // define the statusbar height 
  const STATUSBAR_HEIGHT:number = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;  

  // pixels ratio 
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size:number) => size / fontScale; // for fonts 
  
  // navigations 
  const Stack = createNativeStackNavigator(); // Stack Navigation 
  const Tab = createBottomTabNavigator(); // Tab Navigation 

 
  // states 
  const [isLoggedin,setIsLoggedin] = useState(false);


  function HomeScreenStack(){
    return (
      <Stack.Navigator initialRouteName='homescreen'>
        <Stack.Screen name='homescreen' component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='notification' component={NotificationScreen} options={{headerShown:false}}/> 
        <Stack.Screen name="OfferScreen" component={OfferScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    )
  }

  return ( 
    // <SafeAreaView style={[styles.container]}>  
    //    <StatusBar  
    //     backgroundColor='green'
    //     barStyle='dark-content'  
    //   />
    //   <NavigationContainer> 

    //   <Tab.Navigator 
    //     screenOptions={({route}) => ({
    //       tabBarHideOnKeyboard: true,
    //       tabBarStyle: {
    //         display: 'flex',
    //         position: 'absolute',
    //         bottom:8,
    //         left: 8,
    //         right: 8,
    //         elevation: 5,
    //         backgroundColor: '#9C34C2',
    //         borderRadius:6,
    //         borderWidth:0, 
    //         height: 60,
    //         borderTopColor:'transparent'
    //       },
    //       tabBarShowLabel: false,
    //       headerShown: false,
    //     })}
    //   >
    //       <Tab.Screen name="Home" component={HomeScreenStack} 
    //         options={{
    //           headerShown: false,
    //           tabBarIcon: ({focused}) => (
    //             <View
    //               style={{
    //                 // top: Platform.OS === 'ios' ? 10 : 0,
    //               }}>
    //                 {
    //                   focused?
    //                   <View style={{width:55,height:45,backgroundColor:'#212121',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
    //                     <Icon name="home" size={24} color="#fff"/>
    //                   </View>:
    //                   <View style={{width:55,height:45,backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
    //                     <Icon name="home" size={24} color="#fff"/>
    //                   </View>
    //                 }
                  
    //             </View>
    //           ),
    //         }}
    //       />
    //       <Tab.Screen name="Profile" component={ProfileScreen} 
    //         options={{
    //           headerShown: false,
    //           tabBarIcon: ({focused}) => (
    //             <View
    //               style={{
    //                 // top: Platform.OS === 'ios' ? 10 : 0,
    //               }}> 
    //                 {
    //                   focused?
    //                   <View style={{width:55,height:45,backgroundColor:'#212121',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
    //                     <IconM name="currency-ils" size={24} color="#fff"/>
    //                   </View>
    //                   :
    //                   <View style={{width:55,height:45,backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
    //                     <IconM name="currency-ils" size={24} color="#fff"/>
    //                   </View>  
    //                 }
    //             </View>
    //           ),
    //         }}
    //       />
    //       <Tab.Screen name="mas" component={ProfileScreen} 
    //         options={{
    //           tabBarIcon: ({focused}) => (
    //             <View
    //               style={{
    //                 // top: Platform.OS === 'ios' ? 10 : 0,
    //               }}> 
    //                {
    //                   focused? 
    //                   <View style={{width:55,height:45,backgroundColor:'#212121',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
    //                     <Icon name="profile" size={24} color="#fff"/>
    //                   </View>
    //                   :
    //                   <View style={{width:55,height:45,backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
    //                     <Icon name="profile" size={24} color="#fff"/>
    //                   </View>  
    //                 }
    //             </View>
    //           ),
    //         }}
    //       />
    //   </Tab.Navigator>


    //   </NavigationContainer>
    // </SafeAreaView> 
   
    <NavigationContainer> 
      <SafeAreaView style={[styles.container]}>  
        <StatusBar   
          barStyle='dark-content'  
        />
        <Tab.Navigator 
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarHideOnKeyboard: true,
            tabBarBackground: () => <MenuBlur />,
            tabBarStyle: {
              display: 'flex',
              position: 'absolute',
              bottom: 6,
              left: 6,
              right: 6,
              elevation: 5,
              // backgroundColor: '#9C34C2',
              borderRadius:12,
              borderWidth:0, 
              height: 60,
              borderTopColor:'transparent'
            },
            
            tabBarShowLabel: false,
            headerShown: false,
          })}
        >
            <Tab.Screen name="Home" component={HomeScreenStack} 
              options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      // top: Platform.OS === 'ios' ? 10 : 0,
                    }}>
                      {
                        focused?
                        <View style={{width:55,height:45,backgroundColor:'#212121',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
                          <Icon name="home" size={24} color="#fff"/>
                        </View>:
                        <View style={{width:55,height:45,backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
                          <Icon name="home" size={24} color="#fff"/>
                        </View>
                      }
                    
                  </View>
                ),
              }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} 
              options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      // top: Platform.OS === 'ios' ? 10 : 0,
                    }}> 
                      {
                        focused?
                        <View style={{width:55,height:45,backgroundColor:'#212121',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
                          <IconM name="currency-ils" size={24} color="#fff"/>
                        </View>
                        :
                        <View style={{width:55,height:45,backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
                          <IconM name="currency-ils" size={24} color="#fff"/>
                        </View>  
                      }
                  </View>
                ),
              }}
            />
            <Tab.Screen name="mas" component={ProfileScreen} 
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      // top: Platform.OS === 'ios' ? 10 : 0,
                    }}> 
                    {
                        focused? 
                        <View style={{width:55,height:45,backgroundColor:'#212121',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
                          <Icon name="profile" size={24} color="#fff"/>
                        </View>
                        :
                        <View style={{width:55,height:45,backgroundColor:'transparent',justifyContent:'center',alignContent:'center',alignItems:'center',borderRadius:24}}>
                          <Icon name="profile" size={24} color="#fff"/>
                        </View>  
                      }
                  </View>
                ),
              }}
            />
        </Tab.Navigator>
      </SafeAreaView>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,  
    backgroundColor:"#ffffff"
  },
});


export default App;
