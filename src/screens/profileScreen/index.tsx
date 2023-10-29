import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

 
const ProfileScreen = ()=>{
    return (
        <View style={[styles.ProfilescreenContainer]}>
            <Text>Profile Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    ProfilescreenContainer: {
      flex:1,  
      backgroundColor:"red",
      padding:10,
      paddingBottom:0
    },
  });
  

export default ProfileScreen;