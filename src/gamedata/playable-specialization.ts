/**
 * Playable Specialization API Return Types
 */

import { linksStruct, refStruct, mediaStruct, APIMediaStruct, spellTooltip } from "../shared";

/**
 * Playable Specializations Index
 * 
 * /data/wow/playable-specialization/index 
 */
export interface APIPlayableSpecializationsIndex {
    _links: linksStruct;
    classes: refStruct[];
}

/**
 * Playable Class
 * 
 * /data/wow/playable-specialization/{{specId}}
 */
export interface APIPlayableSpecialization {
    _links: linksStruct;
    id: number;
    name: string;
    playable_class: refStruct;
    gender_description: {
        male: string;
        female: string;
    }
    media?: mediaStruct;
    role: {
        name: string;
        type: string;
    }
    pvp_talents: {
        talent: refStruct;
        spell_tooltip: spellTooltip;
    }[]
    spec_talent_tree: refStruct;
    power_type: refStruct;
    primary_stat_type: {
        type: string;
        name: string;
    }
    hero_talent_trees: refStruct[];
}

/** 
 * Playable Class Media
 * 
 * /data/wow/media/playable-specialization/{{specId}}
 */
export interface APIPlayableSpecializationMedia extends APIMediaStruct {
}