import React, { useState,createContext, useContext } from 'react'
import { TextInput,Text,View,StyleSheet, Touchable } from 'react-native'
import CreateMap from '../createmap';
import { UserCoordinates } from '@/src/interface';
import { LocationContext } from '../LocationProvider';
import { TouchableOpacity } from 'react-native';
export default function ManualLocation(){
  const [text,setText] = useState("");
  const {location,setLocation}= useContext(LocationContext);
  return (
    <>


 <View style = {styles.box}>
    <TextInput  style = {styles.text}
                value = {text}
                onChangeText={(text) =>{setText(text)}}
                placeholder='Type your location(lat:lon) ->'>
                  
    </TextInput>
   <TouchableOpacity onPress={()=>{
    setLocation(text);
   }}>
    <Text>Press</Text>
   </TouchableOpacity>
    </View>
    <Text style = {styles.text}>Your location: {location}</Text>
      
    
   

    
    </>
    
  )
}


const styles = StyleSheet.create(
  {
    box: {
      marginVertical:30,
      padding:10,
      borderColor: "#373688",
      backgroundColor:"#ad6c16"

    },
    text: {
      color: "#3cbe95",
      fontWeight:"bold"
    }
  }
)