import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

 
const AuthScreen = ()=>{
    return (
        <View style={[styles.AuthscreenContainer]}>
            <Text>Auth Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    AuthscreenContainer: {
      flex:1,  
      backgroundColor:"red",
      padding:10,
      paddingBottom:0
    },
  });
  

export default AuthScreen;