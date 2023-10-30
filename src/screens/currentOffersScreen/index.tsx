import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import { View, Text, StyleSheet, Image ,Dimensions,PixelRatio, FlatList } from 'react-native'   
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import BottomSheet,{ BottomSheetView, BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import Animated from "react-native-reanimated";

// icons  
import Icon from 'react-native-vector-icons/MaterialIcons';

// componets 
import HeaderBack from '../../components/HeaderBack';
import SquareButton from '../../components/ButtonSquare';

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

const OfferScreen = ()=>{
    const navigation = useNavigation(); 
    // hide the bottom-tab navigation from the screen
    // get back the navigation on parent.screen
    useEffect(() => {
        navigation.getParent()?.setOptions({
          tabBarStyle: {
            display: "none"
          }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
              position: 'absolute',
              bottom:6,
              left: 6,
              right: 6,
              elevation: 5,
              // backgroundColor: '#9C34C2',
              borderRadius:12,
              borderWidth:0, 
              height: 60,
              borderTopColor:'transparent'
            },
        });
    }, [navigation]);
    return(
        <GestureHandlerRootView style={styles.Container}>
            <HeaderBack screenname="Current Offers" navigation={navigation} backscreen="homescreen"/>
            <ScrollView style={styles.OffersContaier} scrollEnabled={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text style={styles.ContentTitle}>
                        Credit Limit & Discount
                    </Text>
                    <Text style={styles.ContentPagra}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                </View>
                <View style={{height:220}}>
                    <Image source={require('../../../assets/verticle.png')} style={{width:'100%',height:'100%',}}/> 
                </View> 
                <View style={[styles.content,{}]}> 
                    <Text style={styles.ContentPagra}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:paddings.md,paddingTop:0,marginBottom:8}}>
                    <SquareButton width="49%" height={(height - (height / 3)) / 8 } type="outline" label="Cancle" loanid="002" />
                    <SquareButton width="49%" height={(height - (height / 3)) / 8 } type="fill" label="Apply Now" loanid="001" /> 
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    Container: { 
      paddingBottom:0,
      overflow:'hidden',
      backgroundColor:'#f0f0f0',
      height:height
    },
    OffersContaier:{
        width:'100%',
        minHeight:height-90,
        backgroundColor:'#f0f0f0',  
    },
    content:{
        padding:paddings.sm,
        marginBottom:18
    },
    ContentTitle:{
        fontSize:getFontSize(45),
        fontWeight:'800',
        color:'#212121',
        marginBottom:18,
        marginTop:18
    },
    ContentPagra:{
        fontSize:getFontSize(16),
        fontWeight:'400',
        color:'#141414',
    }
});
export default OfferScreen;