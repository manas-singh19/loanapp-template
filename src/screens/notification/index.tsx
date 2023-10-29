import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import { View, Text, StyleSheet, TouchableOpacity ,Dimensions,PixelRatio, FlatList } from 'react-native'   
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import BottomSheet,{ BottomSheetView, BottomSheetBackdrop} from '@gorhom/bottom-sheet';

import Animated from "react-native-reanimated";

// icons  
import Icon from 'react-native-vector-icons/MaterialIcons';

// componets 
import HeaderBack from '../../components/HeaderBack';

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

// // compoent
// import NotificationBox from '../../components/notificationBox';


interface ItemData{
  id: string
  title: string
  content:string
};

interface ItemProps{
  item: ItemData
  onPress: () => void
};
 
 

const NotificationScreen = ()=>{
    const navigation = useNavigation(); 
     
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
   

    // variables 
    let snapPoints = useMemo(() => ['30%','90%'], []); 
 
    // botton sheet index 
    const [bottomSheetIndex,setBottonSheetIndex] = useState(-1);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
      // snapPoints = useMemo(() => ['10%','90%'], []);
      setBottonSheetIndex(-1);
    }, []); 
    
    // current selected notificationID
    const [selectedId, setSelectedId] = useState<string>();

    // axios, get notification content from server. 
     

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

    const DATA: ItemData[] = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
    ]; 
    
    // notification box  
    const NotificationBox = ({item, onPress}:ItemProps) =>(
      <TouchableOpacity style={styles.notificationBox} id={item.id} onPress={onPress} >
        <View style={styles.icon}>
            <View style={{width:45,height:45,justifyContent:'center',alignContent:'center',alignItems:'center',backgroundColor:'#dae0ef',borderRadius:23}}>
                <Icon name="app-registration" size={fontSizes.xxxxlg} color="#000"/>
            </View> 
        </View>
        <View style={styles.contentNotifi}>
            <Text style={{fontSize:getFontSize(fontSizes.md),fontWeight:'600',marginBottom:3}}>{item.title}</Text>
            <Text style={{fontSize:getFontSize(fontSizes.sm),fontWeight:'400'}}>{item.content}</Text>
        </View>
      </TouchableOpacity>
    )
    
    // notification box reenderItem
    const renderItem = ({item}: {item: ItemData}) => { 
      return (
        <NotificationBox
          item={item}
          onPress={() =>{ setBottonSheetIndex(1) ;setSelectedId(item.id);}}  
        />
      );
    };
 

    return (
        <GestureHandlerRootView style={styles.Container}>
            <HeaderBack screenname="notifications" navigation={navigation} backscreen="homescreen"/>
                    
                    <View style={styles.content}>  
                            <FlatList
                              data={DATA}
                              renderItem={renderItem}
                              keyExtractor={item => item.id}
                              extraData={selectedId}
                            />
                    </View> 

                    <BottomSheet
                      ref={bottomSheetRef}
                      index={bottomSheetIndex}
                      snapPoints={snapPoints}
                      onChange={handleSheetChanges}
                      enablePanDownToClose={true} 
                      backdropComponent={props => (<BottomSheetBackdrop {...props}
                        opacity={0.5}
                        enableTouchThrough={false}
                        appearsOnIndex={0}
                        disappearsOnIndex={-1}
                        style={[{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }, StyleSheet.absoluteFillObject]} />)}
                    > 
                      <BottomSheetView style={[styles.contentContainer]}>
                         <Text style={styles.bottonsheetHeader}>
                            Dynamic Notification Header
                         </Text>
                         <Text style={styles.bottomsheetPara}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                         </Text>
                         <Text style={styles.bottomsheetPara}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
                         </Text>
                      </BottomSheetView>
                  </BottomSheet>
             
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
    scrollView: {
        backgroundColor: '#f0f0f0',  
    },
    content:{
        padding:paddings.xxsm,
        height:height,
        backgroundColor:'#f0f0f0'
    },
    notificationBox:{
        width:'100%',
        minHeight:60,
        backgroundColor:'#fff',
        borderRadius:6,
        borderWidth:1,
        borderColor:'#ddd',
        marginBottom:12,
        flexDirection:'row', 
        padding:paddings.xxsm
    },
    icon:{
        width:'15%',
        height:'100%',  
        justifyContent:'flex-start',
        alignContent:'center',
        alignItems:'center', 
    },
    contentNotifi:{
        flexDirection:'column',  
        width:'85%',
        paddingLeft:paddings.xsm
    },
    contentContainer: {
      flex: 1,
      alignItems: 'flex-start',
      flexDirection:'column',
      padding:paddings.sm,
      backgroundColor:'#FDFDFD'
    },
    bottonsheetHeader:{
      fontSize:getFontSize(45),
      lineHeight:getFontSize(55),
      fontWeight:'900',
      marginBottom:22
    },
    bottomsheetPara:{
      fontSize:getFontSize(14),
      lineHeight:getFontSize(18),
      fontWeight:'400',
      marginBottom:18
    }
})

export default NotificationScreen; 