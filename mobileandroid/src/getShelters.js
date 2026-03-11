import axios from "axios";
export async function getNearbyShelters(lat, lon, cityCode) {
    const response = await axios.get(`LINKWILLBEGIVENLATER`);
    if (!response.data.features) {
        console.log("No shelters found");
        return [];
    }
    return response.data.features.map((shelter) => ({
        id: shelter.properties["共通ID"],
        name: shelter.properties["施設・場所名"],
        lat: shelter.geometry.coordinates[1],
        lon: shelter.geometry.coordinates[0],
        distnaceToUser: 0
    }));
}
