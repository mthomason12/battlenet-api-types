/**
 * @categoryDescription Character Appearance API
 * Character Appearance API
 * @module
 */

import { linksStruct, characterRef, refStruct, genderStruct, factionStruct, guildCrestStruct, idNameStruct } from "../shared";

/**
 * Character Appearance Summary 
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/appearance
 * @category Character Appearance API
 */
export interface APICharacterAppearanceSummary {
    _links: linksStruct;
    character: characterRef;
    playable_race: refStruct;
    playable_class: refStruct;
    active_spec: refStruct;
    gender: genderStruct;
    faction: factionStruct;
    guild_crest: guildCrestStruct;
    items: characterAppearanceItem[];
    customizations: characterCustomizationItem[];
}

/**
 * @category Character Appearance API
 */
export interface characterAppearanceItem {
    id: number;
    slot: {
        type: string;
        name: string;
    }
    enchant: number;
    item_appearance_modifier_id: number;
    internal_slot_id: number;
    subclass: number;
}

/**
 * @category Character Appearance API
 */
export interface characterCustomizationItem {
    option: idNameStruct;
    choice: {
        id: number;
        name?: string;
        display_order: number;
    }
}