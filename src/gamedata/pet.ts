/**
 * @categoryDescription Pet API
 * Pet API Return Types
 * @module
 */

import { APIMediaStruct, linksStruct, idkeyStruct, refStruct } from "../shared";

//region Pets

/**
 * Pet
 * 
 * /data/wow/pet/{{petId}}
 * @category Pet API
 */
export interface APIPet {
    _links: linksStruct;
    id: number;
    name: string;
    battle_pet_type: {
        id: number
        type: string;
        name: string;
    }
    description: string;
    is_capturable: boolean;
    is_tradable: boolean;
    is_battlepet: boolean;
    is_alliance_only: boolean;
    is_horde_only: boolean;
    abilities: {
        ability: refStruct;
        slot: number;
        required_level?: number;
    }[];
    source: {
        type: string;
        name: string;
    }
    icon: string;
    creature: refStruct;
    is_random_creature_display: boolean;
    media: idkeyStruct;
}

/**
 * Pets Index
 * 
 * /data/wow/pet/index
 * @category Pet API
 */
export interface APIPetIndex {
    _links: linksStruct;
    mounts: refStruct[];
}

//region Pet Media

/**
 * Pet Media
 * 
 * /data/wow/media/pet/{{petId}}
 * @category Pet API
 */
export interface APIPetMedia extends APIMediaStruct {
}

//region Pet Abilities

/**
 * Pet Abilities Index
 * 
 * /data/wow/pet-ability/index
 * @category Pet API
 */
export interface APIPetAbilitiesIndex {
    _links: linksStruct;
    mounts: refStruct[];
}

/**
 * Pet Ability
 * 
 * /data/wow/pet-ability/{{petAbilityId}}
 * @category Pet API
 */
export interface APIPetAbility {
    _links: linksStruct;
    id: number;
    name: string;
    battle_pet_type: {
        id: number
        type: string;
        name: string;
    }
    rounds: number;
    media: idkeyStruct;
}

/**
 * Pet Ability Media
 * 
 * /data/wow/media/pet-ability/{{petAbilityId}}
 * @category Pet API
 */
export interface APIPetAbilityMedia extends APIMediaStruct {
}
