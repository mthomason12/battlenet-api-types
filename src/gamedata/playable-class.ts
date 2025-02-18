/**
 * Playable Class API Return Types
 *
 */

import { APIMediaStruct, hrefStruct, linksStruct, mediaStruct, refStruct } from "../shared";

/**
 * Playable Classes Index
 * 
 * /data/wow/playable-class/index 
 */
export interface APIPlayableClassesIndex {
    _links: linksStruct;
    classes: refStruct[];
}

/**
 * Playable Class
 * 
 * /data/wow/playable-class/{{classId}}
 */
export interface APIPlayableClass {
    _links: linksStruct;
    id: number;
    name: string;
    gender_name: {
        male: string;
        female: string;
    }
    power_type: refStruct;
    specializations: refStruct[];
    media?: mediaStruct;
    pvp_talent_slots: hrefStruct;
    playable_races: refStruct[];
    additional_power_types: refStruct[];
}

/** 
 * Playable Class Media
 * 
 * /data/wow/media/playable-class/{playableClassId} 
 */
export interface APIPlayableClassMedia extends APIMediaStruct {
}


/**
 * PvP Talent Slots
 * 
 * /data/wow/playable-class/{classId}/pvp-talent-slots 
 */
export interface APIPvPTalentSlots {
    _links: linksStruct;
    talent_slots: {
       slot_number: number;
       unlock_player_level: number; 
    }[]
}