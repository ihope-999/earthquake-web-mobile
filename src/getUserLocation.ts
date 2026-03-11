import { UserCoordinates } from "./interface";
export async function getUserLocation() : Promise<UserCoordinates> {

   return new Promise((resolve, reject) =>
    {
        navigator.geolocation.getCurrentPosition(position =>{
            resolve({
                latitude:position.coords.latitude,
                longitude:position.coords.longitude
            });
        },
        error =>{
            reject(error);
        })
    });
    
}


