/**
 * @categoryDescription Character Hunter Pets API
 * Character Hunter Pets API
 * @module 
 */

import { linksStruct, characterRef, refStruct, idkeyStruct } from "../shared";

/**
 * Hunter Pets Summary 
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/hunter-pets
 * @category Character Hunter Pets API
 */
export interface APICharacterHunterPetsSummary {
    _links: linksStruct;
    character: characterRef;
    hunter_pets: characterHunterPet[];
}

/**
 * @category Character Hunter Pets API
 */
export interface characterHunterPet {
    id: number;
    name: string;
    level: number;
    creature: refStruct;
    slot: number;
    creature_display: idkeyStruct;
}