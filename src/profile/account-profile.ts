
/**
 * @group Profile APIs
 * @categoryDescription Account Profile API
 * Account Profile API Return Types
 * 
 * IMPORTANT: These all require a valid OAuth token from the user's Battle.net login, 
 * and return data specific to the that user's account.
 * 
 * @module
 */

import {
    characterRef, factionStruct, genderStruct, hrefStruct, linksStruct, mediaStruct, positionStruct,
    realmStruct, refStruct
} from "../shared";

//region Account Profile Summary

/**
 * Individual character from {@link APIAccountProfileSummary}
 * @category Account Profile API
 * @group Profile APIs
 */
export interface APIAccountProfileCharacter {
    id?: number;
    name?: string;
    level?: number;
    character?: hrefStruct;
    protected_character?: hrefStruct;
    account?: number;
    realm?: realmStruct;
    playable_class?: refStruct;
    playable_race?: refStruct;
    gender?: genderStruct;
    faction?: factionStruct;
}

/**
 * Account Profile Summary
 * 
 * /profile/user/wow
 * 
 * This is specific to the currently logged-in user's bnet account
 * @category Account Profile API
 */
export interface APIAccountProfileSummary {
    _links: linksStruct;
    wow_accounts: {
        id: number;
        characters: APIAccountProfileCharacter[];
    }[]
}

//region Protected Character Profile Summary

/**
 * Protected Character Profile Summary
 * 
 * /profile/user/wow/protected-character/realmID/
 * 
 * This is specific to the currently logged-in user's bnet account
 * @category Account Profile API
 */
export interface APIProtectedCharacterProfileSummary {
    _links: linksStruct;
    id: number;
    name: string;
    money: number;
    character: characterRef;
    protected_stats: {
        total_number_deaths: number;
        total_gold_gained: number;
        total_gold_lost: number;
        total_item_value_gained: number;
        level_number_deaths: number;
        level_gold_gained: number;
        level_gold_lost: number;
        level_item_value_gained: number;
    }
    position: positionStruct;
    bind_position: positionStruct;
    wow_account: number;
}

//region Account Collections Index

/**
 * Account Collections Index
 * 
 * /profile/user/wow/collections
 * 
 * This is specific to the currently logged-in user's bnet account
 * @category Account Profile API
 */
export interface APIAccountCollectionsIndex {
    _links: linksStruct;
    pets: hrefStruct;
    mounts: hrefStruct;
    heirlooms: hrefStruct;
    toys: hrefStruct;
    transmogs: hrefStruct;
}

//region Account Heirlooms

/**
 * Individual Heirloom from {@link APIAccountHeirloomsCollectionSummary}
 * @category Account Profile API
 */
export interface APIAccountHeirloom {
    heirloom: refStruct;
    upgrade: {
        level: number;
    }
}

/**
 * Account Heirlooms Collection Summary
 * 
 * /profile/user/wow/collections/heirlooms
 * 
 * This is specific to the currently logged-in user's bnet account
 * @category Account Profile API
 */
export interface APIAccountHeirloomsCollectionSummary {
    _links: linksStruct;
    heirlooms: APIAccountHeirloom[]
}

//region Account Mounts

/**
 * Individual Mount from  {@link APIAccountMountsCollectionSummary}
 * @category Account Profile API
 */
export interface APIAccountMount {
    mount: refStruct;
}

/**
 * Account Mounts Collection Summary
 * 
 * /profile/user/wow/collections/mounts
 * 
 * This is specific to the currently logged-in user's bnet account
 * @category Account Profile API
 */
export interface APIAccountMountsCollectionSummary {
    _links: linksStruct;
    mounts: APIAccountMount[];
}

//region Account Pets

/**
 * Individual pet from {@link APIAccountPetsCollectionSummary}
 * @category Account Profile API
 */
export interface APIAccountPet {
    id: number;
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
    is_favorite?: boolean;
    name?: string;
    creature_display: mediaStruct;
}

/**
 * Account Pets Collection Summary
 * 
 * /profile/user/wow/collections/pets
 * 
 * This is specific to the currently logged-in user's bnet account
 * @category Account Profile API
 */
export interface APIAccountPetsCollectionSummary {
    _links: linksStruct;
    pets: APIAccountPet[];
    unlocked_battle_pet_slots: number;
}

//region Account Toys

/**
 * Individual item from {@link APIAccountToysCollectionSummary}
 * 
 * @category Account Profile API
 */
export interface APIAccountToy {
    toy: refStruct;
    is_favorite?: boolean;
}

/**
 * Account Toys Collection Summary
 * 
 * /profile/user/wow/collections/toys
 * @category Account Profile API
 */
export interface APIAccountToysCollectionSummary {
    _links: linksStruct;
    toys: APIAccountToy[];
}

//region Account Transmog

/**
 * Individual item from {@link APIAccountTransmogCollectionSummary}
 * @category Account Profile API
 */
export type APIAccountTransmogAppearanceSet = refStruct;

/**
 * Individual item from {@link APIAccountTransmogSlot}
 * @category Account Profile API
 */
export type APIAccountTransmogAppearance = refStruct;

/**
 * Individual item from {@link APIAccountTransmogCollectionSummary}
 * @category Account Profile API
 */
export interface APIAccountTransmogSlot {
    slot: {
        name: string;
        type: string;
    }
    appearances: APIAccountTransmogAppearance[];
}

/**
 * Account Transmog Collection Summary
 * 
 * /profile/user/wow/collections/transmogs
 * @category Account Profile API
 */
export interface APIAccountTransmogCollectionSummary {
    _links: linksStruct;
    appearance_sets: APIAccountTransmogAppearanceSet[];
    slots: APIAccountTransmogSlot[];
}



