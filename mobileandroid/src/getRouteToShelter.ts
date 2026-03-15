import axios from "axios";
import { Coordinates } from "./interface";
export async function getRouteToShelter(lat:number, lon:number, shelterLat: number, shelterLon: number) {

    const response = await axios.get(`https://router.project-osrm.org/route/v1/foot/${lon},${lat};${shelterLon},${shelterLat}?overview=full&geometries=geojson`);
    return response.data.routes[0].geometry.coordinates.map((coord: number[]) : Coordinates=>({
        latitude:coord[1],
        longitude: coord[0]
    }));



}