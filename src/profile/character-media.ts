/**
 * @categoryDescription Character Media API
 * Character Media API
 * @module
 */
import { characterRef, linksStruct } from "../shared";


/**
 * Character Media Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/character-media 
 * @category Character Media API
 */
export interface APICharacterMediaSummary {
    _links: linksStruct;
    character: characterRef;
    assets: {
        key: string;
        value: string;
    }[];
}