/**
 * @categoryDescription Character Specializations API
 * Character Specializations API
 * @module
 */

import { linksStruct, refStruct, characterRef, spellTooltip } from "../shared";

/**
 * Character Specializations Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/specializations
 * @category Character Specializations API 
 */
export interface APICharacterSpecializationsSummary {
    _links: linksStruct;
    specializations: characterSpecialization[];
    active_specialization: refStruct;
    character: characterRef;
    active_hero_talent_tree: refStruct;
}

export interface characterSpecialization{
    specialization: refStruct;
    glyphs?: refStruct[];
    pvp_talent_slots?: {
        selected: {
            talent: refStruct;
            spell_tooltip: spellTooltip;
        }
        slot_number: number;
    }[];
    loadouts: {
        is_active: boolean;
        talent_loadout_code: string;
        selected_class_talents: {
            id: number;
            rank: number;
            tooltip?: {
                talent: refStruct;
                spell_tooltip: spellTooltip;
            }
        }
    }[];
}

