import { getUserLocation } from "./getUserLocation.js";
import { getRecentEarthquake } from "./getEarthquakes.js";
const userCoordinates = await getUserLocation();
await getRecentEarthquake(userCoordinates);
// for test usage 
await getRecentEarthquake({ latitude: 36.37, longitude: 140.47 });
