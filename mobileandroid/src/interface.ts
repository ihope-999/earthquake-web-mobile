export interface P2PEarthquake {
  id: string;
  code: number;
  time: string;
  earthquake?: {
    time: string;
    hypocenter: {
      name: string;       
      latitude: number;    
      longitude: number;
      depth: number;
      magnitude: number;
    };
    maxScale: number;
  };
}

export type UserCoordinates = {
    latitude : number,
    longitude : number
}

export interface Coordinates {
  latitude:number,
  longitude:number
}