import axios from "axios";
import { MathUtils } from "./MathUtils";
export async function getRecentEarthquake(userCoordinates, maxDistanceKM = 50) {
    const response = await axios.get('WILLLATERADD', {
        params: {
            codes: "551",
            limit: 100
        }
    });
    const earthquakes = response.data;
    const userLocation = { lon: userCoordinates.longitude,
        lat: userCoordinates.latitude,
    };
    const nearbyEarthquakes = earthquakes.filter(eq => {
        if (!eq.earthquake?.hypocenter)
            return false;
        const [lon, lat, depth] = [eq.earthquake.hypocenter.longitude,
            eq.earthquake.hypocenter.latitude,
            eq.earthquake.hypocenter.depth
        ];
        const distance = MathUtils.getDistanceKM(userLocation.lat, userLocation.lon, lat, lon);
        return distance <= maxDistanceKM;
    });
    console.log(`Found earthquakes: ${nearbyEarthquakes.length}`);
    nearbyEarthquakes.forEach(neq => {
        console.log(`Name: ${neq.earthquake?.hypocenter.name}`);
    });
    console.log(`Your current location: ${userCoordinates.latitude} : ${userCoordinates.longitude}`);
    return nearbyEarthquakes;
}
