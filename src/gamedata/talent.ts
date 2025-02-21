/**
 * @categoryDescription Talent API
 * Talent API Return Types
 * @module
 */

import { hrefStruct, idkeyStruct, linksStruct, refStruct, spellTooltip } from "../shared";


/**
 * Talent Tree Index
 * 
 * /data/wow/talent-tree/index
 * @category Talent API
 */
export interface APITalentTreeIndex {
    _links: linksStruct;
    spec_talent_trees: refStruct[];
}

/**
 * Talent Tree
 * 
 * /data/wow/talent-tree/{talentTreeId}/playable-specialization/{specId}
 * @category Talent API
 */
export interface APITalentTree {
    _links?: linksStruct;
    id: number;
    name: string;
    playable_class: refStruct;
    playable_specialization: refStruct;
    media: {
        key: hrefStruct;
    }
    restriction_lines: {
        required_points: number;
        restricted_row: number;
        is_for_class: boolean;
    }[]
    class_talent_nodes: talentTreeNode[];
    spec_talent_nodes: talentTreeNode[];
    hero_talent_nodes: heroTalentTreeNode[];
}

/*
 * @category Talent API
 */
export interface talentTreeNode {
    id: number;
    unlocks?: number[];
    node_type: {
        id: number;
        type: string;
    }
    ranks: {
        rank: number;
        tooltip?: {
            talent: refStruct;
            spell_tooltip: spellTooltip;
        }
        default_points?: number;
    }[]
    display_row: number;
    display_col: number;
    raw_position_x: number;
    raw_position_y: number;
}

/*
 * @category Talent API
 */
export interface heroTalentTreeNode {
    id: number;
    name: string;
    media: idkeyStruct;
    hero_talent_nodes: {
        id: number;
        locked_by?: number[];
        unlocks?: number[];
        node_type: {
            id: number;
            type: string;
        }
        ranks: {
            rank: number;
            choice_of_tooltips: {
                talent: refStruct;
                spell_tooltip: spellTooltip;
            }[]
        }[]
        display_row: number;
        display_col: number;
        raw_position_x: number;
        raw_position_y: number;
    }
    playable_class: refStruct;
    playable_specializations: refStruct[];
}


/**
 * Talent Tree Nodes
 * 
 * /data/wow/talent-tree/{talentTreeId}
 * @category Talent API
 */
export interface APITalentTreeNodes {
    _links: linksStruct;
    id: number;
    spec_talent_trees: {
        key: hrefStruct;
        name: string;
    }[]
    talent_nodes: talentTreeNode[];
}

/**
 * Talents Index
 * 
 * /data/wow/talent/index
 * @category Talent API
 */
export interface APITalentIndex {
    _links: linksStruct;
    talents: refStruct[];
}

/**
 * Talent
 * 
 * /data/wow/talent/{talentId}
 * @category Talent API
 */
export interface APITalent {
    _links: linksStruct;
    id: number;
    rank_descriptions: {
        rank: number;
        description: string;
    }[]
    spell: refStruct;
    playable_class: refStruct;
    playable_specialization: refStruct;
}

/**
 * PvP Talents Index
 * 
 * /data/wow/pvp-talent/index
 * @category Talent API
 */
export interface APIPvPTalentIndex {
    _links: linksStruct;
    pvp_talents: refStruct[];
}

/**
 * PvP Talent
 * 
 * /data/wow/pvp-talent/{pvpTalentId}
 * @category Talent API
 */
export interface APIPvPTalent {
    _links: linksStruct;
    id: number;
    description: string;
    spell: refStruct;
    playable_specialization: refStruct;
    unlock_player_level: number;
    compatible_slots: number[];
}