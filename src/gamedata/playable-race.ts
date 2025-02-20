/**
 * @categoryDescription Playable Race API
 * Playable Race API Return Types
 * 
 */

import { linksStruct, refStruct, idkeyStruct, hrefStruct } from "../shared";


/**
 * Playable Races Index
 * 
 * /data/wow/playable-race/index 
 * @category Playable Race API
 */
export interface APIPlayableRacesIndex {
    _links: linksStruct;
    races: refStruct[];
}

/**
 * Playable Race
 * 
 * /data/wow/playable-race/{{raceId}}
 * @category Playable Race API
 */
export interface APIPlayableRace {
    _links: linksStruct;
    id: number;
    name: string;
    gender_name: {
        male: string;
        female: string;
    }
    faction: {
        type: string;
        name: string;
    }
    is_selectable: true;
    is_allied_race: false;
    playable_classes: refStruct[];
}