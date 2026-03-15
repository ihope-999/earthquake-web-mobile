import { MathUtils } from "./MathUtils";
import { Shelter } from "../../src/interface";
import axios from "axios";


export async function getNearbyShelters(lat: number, lon : number): Promise<Shelter[]>{


const query = `[out:json][timeout:30];
(
  node["amenity"="shelter"](around:10000,${lat},${lon});
  node["emergency"="assembly_point"](around:5000,${lat},${lon});
  node["disaster"="evacuation_point"](around:10000,${lat},${lon});
);out;`;
  const response = await axios.get(
  `https://overpass.kumi.systems/api/interpreter?data=${encodeURIComponent(query)}`
);

  if(response.data.elements.length === 0){
    console.log("No shelters found!");
  }

  const allShelters : Shelter[] = response.data.elements.map((shelter: any) =>{
    return ({
      id: shelter.id.toString(),
      name: shelter.tags?.name || "Shelter name is unknown",
      lat: shelter.lat,
      lon : shelter.lon,
      distanceToUser: MathUtils.getDistanceKM(lat,lon,shelter.lat,shelter.lon)
    });
  })
  console.log(`Shelters found: ${allShelters.length}`);
  allShelters.forEach(shelter => console.log(`Shelter name: ${shelter.name}`));
  return allShelters.sort((a,b) => a.distanceToUser - b.distanceToUser);
}