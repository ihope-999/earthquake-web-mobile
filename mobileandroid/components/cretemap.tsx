
import * as EarthquakeModule from "../src/getEarthquakes";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {GetUserLocation} from "./getUserLocation";
import { P2PEarthquake, UserCoordinates } from "../src/interface"
import { Text } from "react-native";
import {getNearbyShelters} from "../src/getShelters" 
import { Shelter } from "../../src/interface";
export default function CreateMap() {
    const [userCoordinates,setUserCoordinates] =useState<UserCoordinates>();
    const [nearbyEarthquakes,setNearbyEarthquakes] =useState<P2PEarthquake[]>();
    const [nearbyShelters, setNearbyShelters] = useState <Shelter[]>();
    useEffect(() => {
        async function getUserDataQuake(){
          const setupCoordinates = {latitude: 35.6, longitude: 139.6};


          //const newCoordinates = await GetUserLocation();
          const newCoordinates : UserCoordinates = {latitude:35.6, longitude:139.6};
          const shelters = await getNearbyShelters(35.6940,139.7,"131041");
          
          setNearbyShelters(shelters);
          setUserCoordinates(newCoordinates);
          const earthquakes = await EarthquakeModule.getRecentEarthquake(setupCoordinates);  
          setNearbyEarthquakes(earthquakes);
        };
        getUserDataQuake();
    },[])
  return (

   <>
    <View style={styles.container}>
      {userCoordinates && 
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userCoordinates?.latitude || 0,
          longitude: userCoordinates?.longitude || 0,
          latitudeDelta : 2,
          longitudeDelta: 2
         
        }}>
         <Marker coordinate={
                  {latitude:userCoordinates.latitude,
                  longitude:userCoordinates.longitude
                  }
                }
    title ={"You are here!"}
    pinColor="#FF6B00"
    description= {`${userCoordinates.latitude}:${userCoordinates.longitude}`}
      
  >
  </Marker >
  

  {nearbyEarthquakes?.map(eq=>{
    
    if(!eq.earthquake?.hypocenter) {
      return null;
    }
    return <Marker coordinate={{latitude:eq.earthquake.hypocenter.latitude,longitude:eq.earthquake.hypocenter.longitude}}
                   pinColor= {eq.earthquake.hypocenter.magnitude > 3.5 ? "red" :  "yellow"}
                   description= {`Earthquake in: ${eq.earthquake.hypocenter.name}, magnitude: ${eq.earthquake.hypocenter.magnitude},time: ${eq.time}`}
                   title="Earthquake"
    ></Marker>
  })}

  

  

  {nearbyShelters?.map(nearShelter=>{
    console.log(`shelter:${nearShelter.name}`)
    if(!nearShelter.id) {
      return null;
    }
    return <Marker coordinate={{latitude:nearShelter.lat,longitude:nearShelter.lon}}
                   key={nearShelter.id}
                   pinColor="green"
                   description= {`Shelter name: ${nearShelter.name}`}
                   title="ns"
    ></Marker>
  })}



        </MapView>
      
       
  }
    </View>
    
  </>
  );
 
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});