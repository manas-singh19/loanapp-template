import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image,Dimensions,PixelRatio } from 'react-native'   
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
// Compoents 
import Header from '../../components/Header'
import OffersCarousels from '../../components/OffersCarousels'
import LoanCard from '../../components/LoanCard';
import FourFeatures from '../../components/FourFeatures';
import ExtraOffers from '../../components/ExtraOffers';

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


const HomeScreen = ()=>{ 
    const navigation = useNavigation(); 

    
    // hide the bottom-tab navigation from the screen 
   

    return (
        <GestureHandlerRootView style={styles.HomeContainer}>
            <Header navigation={navigation} username="Manas Singh" />  
            <ScrollView style={styles.scrollView} scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <OffersCarousels/>
                 <View style={[styles.HomeContant,{paddingTop:22}]}>
                    
                    <View style={{marginBottom:20}}>
                        <LoanCard loanamount={3122} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={12} />
                        <LoanCard loanamount={2500} loantype="flexi personal loan" loantenure={12} background="#f2d6f5" btnlable="Get now" loanid={13} />
                        <LoanCard loanamount={3122} loantype="business loan" loantenure={12} background="#dae0ef" btnlable="apply now" loanid={14} />
                    </View>

                    <View style={[styles.BoxContainer]}>
                        <FourFeatures/>
                    </View>

                    <View style={styles.ExtaOffers}> 
                        <ExtraOffers id="eee1-eee1" navigation={navigation} /> 
                        <ExtraOffers id="eee2-eee2" navigation={navigation} /> 
                        <ExtraOffers id="eee3-eee3" navigation={navigation} /> 
                        <ExtraOffers id="eee4-eee4" navigation={navigation} /> 
                    </View>

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
      height:height
    },
    scrollView: {
        backgroundColor: '#f0f0f0',  
    },
    HomeContant:{
        padding:paddings.xxsm,
        backgroundColor:'#f0f0f0'
    }, 
    BoxContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    ExtaOffers:{
        flex:1,
        flexDirection:'column',  
        minHeight:230, 
        marginTop:20,
        marginBottom:90
    }
  });
  


export default HomeScreen;