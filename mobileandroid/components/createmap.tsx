
import * as EarthquakeModule from "../src/getEarthquakes";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import {GetUserLocation} from "./GetUserLocation";
import { Coordinates } from "../src/interface";
import { P2PEarthquake, UserCoordinates } from "../src/interface"
import { Text } from "react-native";
import {getNearbyShelters} from "../src/getShelters" 
import { Shelter } from "../../src/interface";
import { getRouteToShelter } from "@/src/getRouteToShelter";
import {LocationContext} from "./LocationProvider"
export default function CreateMap() {
    
    const {location: manualLocation, setLocation} = useContext(LocationContext);
    const [userCoordinates,setUserCoordinates] =useState<UserCoordinates>();
    const [nearbyEarthquakes,setNearbyEarthquakes] =useState<P2PEarthquake[]>();
    const [nearbyShelters, setNearbyShelters] = useState <Shelter[]>();
    const [closestShelters, setClosestShelters] = useState<Shelter[]>();
    const [routes, setRoutes] = useState<Coordinates[][]>();
    useEffect(
      () => {
        async function getUserDataQuake(){
          console.log(`${manualLocation} is manual`);

          let setupCoordinates : UserCoordinates = {latitude:0,longitude:0};
          if(manualLocation === ""){
              setupCoordinates = {latitude:35.6762, longitude:139.6503};
          }
          else{
            console.log("The user provided a manual location input!");
            const parts = manualLocation.split(":");
            const lat = Number(parts[0]);
            const lon = Number(parts[1]);
            if(isNaN(lat) || isNaN(lon)) return;
            setupCoordinates = {latitude:lat, longitude:lon};

          }


          //const newCoordinates = await GetUserLocation();
          const shelters = await getNearbyShelters(setupCoordinates.latitude,setupCoordinates.longitude);
          const found = shelters.slice(0,2);
          setRoutes(await Promise.all((found ?? []).map(shelter =>
             (getRouteToShelter(setupCoordinates.latitude,setupCoordinates.longitude,shelter.lat,shelter.lon)
          ))));
 
          setNearbyShelters(shelters);
          setUserCoordinates(setupCoordinates);
          const earthquakes = await EarthquakeModule.getRecentEarthquake(setupCoordinates);  
          setNearbyEarthquakes(earthquakes);
        };
        getUserDataQuake();
    },[manualLocation])
  return (

   <>
    <View style={styles.container}>
      {userCoordinates && 
      <MapView
        style={styles.map}
        region={{
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
                   description= {`Lct: ${eq.earthquake.hypocenter.name}, Mgt: ${eq.earthquake.hypocenter.magnitude}, T: ${eq.time}`}
                   title="Earthquake"
    ></Marker>
  })}

{
  routes?.map((route,index) => 
    (
    <Polyline coordinates={route}
     key = {index}
     strokeColor="purple"
     strokeWidth={5}></Polyline>
    )
  )
}

  

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