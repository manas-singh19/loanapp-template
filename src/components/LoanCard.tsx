import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions,PixelRatio} from 'react-native'   

// icons  
import Icon from 'react-native-vector-icons/MaterialIcons';
import Rupee from 'react-native-vector-icons/FontAwesome';

// componts 
import Button from './Button';

interface LoanCard{
    loanamount:number,
    loantype:string,
    loantenure:number,
    background:any,
    btnlable:any,
    loanid:any
}

// styles  
import { paddings } from '../styles/padding';
import { fontSizes } from '../styles/fontSize'; 

// width 
const width = Dimensions.get('window').width;
const height = 120;

// fonts 
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size:number) => size / fontScale; // for fonts 

const LoanCard = ({loanamount, loantype, loantenure, background, btnlable, loanid}:LoanCard)=>{
    
    return(
        <View style={styles.cardView}>
            <View style={styles.content}> 
                <View style={styles.cardHalf}>
                    <View style={styles.loanCardAmountBox}>
                        <View style={[styles.loanicons,{backgroundColor:background}]}>
                                <Icon name="app-registration" size={fontSizes.xxxxlg} color="#000"/>
                        </View>
                        <View>
                            <Text style={styles.upto}>Up to</Text>
                            <Text style={styles.loanamount}><Rupee name='rupee' size={fontSizes.md} /> {loanamount}</Text>
                        </View> 
                    </View> 
                </View>
                <View style={[styles.cardHalf]}>
                    <Button width={((width - 40) / 2)-24} height={(height - (height / 3)) / 2 } label={btnlable} loanid={loanid} />
                </View>
            </View>
            <View style={styles.textlink}>
                <Text style={{fontSize:getFontSize(fontSizes.sm),textTransform:'capitalize'}}>{loantype}</Text>
                <Text style={{fontSize:getFontSize(fontSizes.sm)}}>Tenure up to {loantenure} months</Text>
            </View>
        </View>
    )
}

 
const styles = StyleSheet.create({
    cardView:{
        width:width-20,
        height:height,
        backgroundColor:'#fff',
        borderRadius:6,
        marginBottom:12, 
        justifyContent:'flex-start',  
        borderWidth:1,
        borderColor:'#ddd'
    }, 
    content:{
        height: height - (height / 3 ), 
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
    },
    cardHalf:{
        width:(width - 40) / 2, 
        height: height - (height / 3), 
        padding:paddings.xsm,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    loanCardAmountBox:{ 
        width:(width - 40) / 2, 
        height: height - (height / 3), 
        display:'flex',
        flexDirection:'row', 
        alignContent:'center',
        alignItems:'center',
        padding:paddings.xsm,
    },
    loanicons:{
        width:45,
        height:45,
        backgroundColor:'yellow',
        marginRight:8,
        borderRadius:33,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'  
    },
    upto:{
        color:'#9C9C9C',
        fontSize:getFontSize(fontSizes.xsm),
        marginBottom:2
    },
    loanamount:{
        color:'#212121',
        fontSize:getFontSize(fontSizes.xxlg),
        fontWeight:'600'
    },
    loanCardIcons:{
        width:45,
        height:45,
        backgroundColor:'red',
        borderWidth:2,
        borderColor:'green',
        borderRadius:45 
    },
    textlink:{
        height:height / 3 , 
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        padding:12,
        // backgroundColor:'#F5F5F5',
        borderBottomRightRadius:6,
        borderBottomLeftRadius:6
    }   
})

export default LoanCard;