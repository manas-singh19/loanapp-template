import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image} from 'react-native'   
import Carousel from 'react-native-reanimated-carousel';
 
const OffersCarousels = ()=>{
    const width = Dimensions.get('window').width;
    const images = [require('../../assets/slider1.png'),require('../../assets/slider2.png')]
    return (
        <View style={{ height: width / 2 }}>
            <Carousel 
                width={width}
                height={width / 2}
                loop={false}
                autoPlay={false}
                data={images}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (   
                    <View
                        style={{
                            flex: 1, 
                            justifyContent: 'center',
                            backgroundColor:'transparent'
                        }}
                    >   
                       <Image 
                            style={{width:'100%',height:"100%",objectFit:'cover'}}
                            source={images[index]} 
                            // source={{
                            //     uri:`https://picsum.photos/800/600?t=${new Date().getTime()}`
                            // }}
                        />  
                    </View>  
                )}
            />
        </View>
    )
}

export default OffersCarousels;