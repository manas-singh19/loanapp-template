import React, { useEffect, useState , useRef} from 'react'
import { View, Text, StyleSheet, Image,Dimensions,PixelRatio ,TouchableOpacity,Animated, ImageBackground} from 'react-native'   
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Compoents 
import Header from '../../components/Header'
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
  

const LoanScreen = ()=>{
    const navigation = useNavigation(); 
    
  //end: screen menu
    return(
        <GestureHandlerRootView style={styles.HomeContainer}>
           <Header navigation={navigation} username="Manas Singh" />  
           <ScrollView style={[styles.scrollView,{paddingTop:20,padding:paddings.xsm}]} scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                        <LoanCard loanamount={2000} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={12} />
                        <LoanCard loanamount={2500} loantype="flexi personal loan" loantenure={12} background="#f2d6f5" btnlable="Get now" loanid={13} />
                        <LoanCard loanamount={3000} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={14} />
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
    },
  });
export default LoanScreen;