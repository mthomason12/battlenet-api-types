/**
 * @categoryDescription Character Collections API
 * Character Collections API
 * @module
 */

import { characterRef, hrefStruct, idkeyStruct, linksStruct, refStruct } from "../shared";


/**
 * Character Collections Index
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/collections 
 * @category Character Collections API
 */
export interface APICharacterCollectionsIndex {
    _links: linksStruct;
    pets: hrefStruct;
    mounts: hrefStruct;
    heirlooms: hrefStruct;
    toys: hrefStruct;
    character: characterRef;
}

/**
 * Character Heirlooms Collection Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/collections/heirlooms
 * @category Character Collections API
 */
export interface APICharacterHeirloomsCollectionSummary {
    _links: linksStruct;
    heirlooms?: {
        heirloom: refStruct;
        upgrade: {
            level: number;
        }[];
    }[]
}

/**
 * Character Mounts Collection Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/collections/mounts
 * @category Character Collections API
 */
export interface APICharacterMountsCollectionSummary {
    _links: linksStruct;
    mounts?: {
        mount: refStruct;
        is_useable: boolean;
        is_favorite?: boolean;
    }[];
}

/**
 * Character Pets Collection Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/collections/pets
 * @category Character Collections API
 */
export interface APICharacterPetsCollectionSummary {
    _links: linksStruct;
    pets?: characterPetsCollectionPet[];
}

export interface characterPetsCollectionPet{
    species: refStruct;
    level: number;
    quality: {
        type: string;
        name: string;
    }
    stats: {
        breed_id: number;
        health: number;
        power: number;
        speed: number;
    }
    name: string;
    creature_display: idkeyStruct;
    is_favorite?: boolean;
    id: number;
}

/**
 * Character Toys Collection Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/collections/toys
 * @category Character Collections API
 */
export interface APICharacterToysCollectionSummary {
    _links: linksStruct;
    toys?: characterToysCollectionToy[];
}

/**
 * @category Character Collections API
 */
export interface characterToysCollectionToy {
    toy: refStruct;
    is_favorite?: boolean;
}


/**
 * Character Transmog Collection Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/collections/transmogs
 * @category Character Collections API
 */
export interface APICharacterTransmogCollectionSummary {
    _links: linksStruct;
    appearance_sets?: refStruct[];
    slots?: characterTransmogCollectionSlot[];
}

/**
 * @category Character Collections API
 */
export interface characterTransmogCollectionSlot {
    slot: {
        type: string;
        name: string;
    }
    appearances?: refStruct[];
}