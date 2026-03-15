# earthquake-web-mobile
ongoing project.

# Project Attribution and License

## Code
All TypeScript code in this repository is licensed under the [MIT License](https://opensource.org/licenses/MIT).  
You are free to use, copy, modify, and distribute this code under the terms of the MIT License.

## Libraries
- **Axios** is used under the [MIT License](https://github.com/axios/axios/blob/master/LICENSE) and can be freely used in this project.

## Data Sources
This project uses routing and shelter data from the following sources:

1. **OSRM (Open Source Routing Machine)**  
   - Routing requests via the public demo API at `https://router.project-osrm.org/`.  
   - OSRM is BSD-licensed, and its use in this project is permitted for personal, educational, and low-traffic applications.  
   - For commercial or high-traffic use, hosting your own OSRM instance is recommended.

2. **OpenStreetMap (OSM) data via Overpass API**  
   - Shelter, emergency, and evacuation point data is obtained via `https://overpass.kumi.systems/api/interpreter`.  
   - All OSM data is © OpenStreetMap contributors, licensed under the [Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/).  
   - Proper attribution is required when displaying, using, or distributing this data.

// Shelter and routing data © OpenStreetMap contributors, used via OSRM and Overpass API
