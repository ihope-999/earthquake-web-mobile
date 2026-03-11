import React from 'react'
import { View } from 'react-native'
import * as Location from "expo-location";
import {UserCoordinates} from "../../src/interface"
export  async function GetUserLocation() : Promise<UserCoordinates> {
    
  const {status} = await Location.requestForegroundPermissionsAsync();

  if(status !== "granted"){
    throw new Error("No permission given for location access");
  };
  const location = await Location.getCurrentPositionAsync();

  return(
    {
      latitude:location.coords.latitude,
      longitude: location.coords.longitude
    }
  )


}
