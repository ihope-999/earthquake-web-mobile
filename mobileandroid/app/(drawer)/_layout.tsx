import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';
import React from 'react';
import { LocationContext } from '@/components/LocationProvider';

export default function Layout() {

    const [location, setLocation] = useState("");
    return(

        <>
        <GestureHandlerRootView style = {{flex:1}}>
            <LocationContext.Provider value = {{location,setLocation}}>
 <Drawer
            
            screenOptions={{
                headerStyle:{backgroundColor:"#8ee60000"},
                headerTintColor:"#5686d8",
                drawerStyle: {backgroundColor:"#00000099"},
                drawerActiveTintColor:"#5686d8",
                drawerInactiveTintColor: "#ffffff"



            }}
            >
                <Drawer.Screen
                name = "index"
                options= {{
                    title:"Map"
                }}>

                </Drawer.Screen>
                 <Drawer.Screen
                name = "explore"
                options= {{
                    title:"Manual"
                }}>

                </Drawer.Screen>
                 <Drawer.Screen
                name = "about"
                options= {{
                    title:"About"
                }}>

                </Drawer.Screen>

            </Drawer>


            </LocationContext.Provider>
           
        </GestureHandlerRootView>
        </>
    );

}