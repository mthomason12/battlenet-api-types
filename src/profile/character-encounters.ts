/**
 * @categoryDescription Character Encounters API
 * Character Encounters API
 * @module
 */

import { characterRef, hrefStruct, linksStruct, refStruct } from "../shared";


/**
 * Character Encounters Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/encounters 
 * @category Character Encounters API
 */
export interface APICharacterEncountersSummary {
    _links: linksStruct;
    character: characterRef;
    dungeons: hrefStruct;
    raids: hrefStruct;
}

/**
 * Character Dungeons
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/encounters/dungeons
 * @category Character Encounters API
 */
export interface APICharacterDungeons {
    _links: linksStruct;
    expansions: characterInstanceExpansionItem[];
}

/**
 * Character Raids
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/encounters/raids
 * @category Character Encounters API
 */
export interface APICharacterRaids {
    _links: linksStruct;
    expansions: characterInstanceExpansionItem[];
}

/**
 * Part of both {@link APICharacterDungeons} and {@link APICharacterRaids}
 * @category Character Encounters API
 */
export interface characterInstanceExpansionItem {
    expansion: refStruct;
    instances: {
        instance: refStruct;
        modes: {
            difficulty: {
                type: string;
                name: string;
            }
            status: {
                type: string;
                name: string;
            }
            progress: {
                completed_count: number;
                total_count: number;
                encounters: {
                    encounter: refStruct;
                    completed_count: number;
                    last_kill_timestamp: number;
                }[];
            }
        };
    }[];
}

