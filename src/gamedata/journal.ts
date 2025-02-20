/**
 * @categoryDescription Journal API
 * Journal API Return Types
 * @module
 */

import { APIMediaStruct, APISearch, APISearchResult, idNameStruct, linksStruct, idkeyStruct, refStruct, regionedNameStruct } from "../shared";

//region Journal Expansions

/**
 * Journal Expansions Index
 * 
 * /data/wow/journal-expansion/index
 * @category Journal API
 */
export interface APIJournalExpansionsIndex {
    _links: linksStruct;
    tiers: refStruct[];
}

/**
 * Journal Expansion
 * 
 * /data/wow/journal-expansion/{journalExpansionId}
 * @category Journal API
 */
export interface APIJournalExpansion {
    _links?: linksStruct;
    id: number;
    name: string;
    dungeons: refStruct[];
}


//region Journal Encounters

/**
 * Journal Encounters Index
 * 
 * /data/wow/journal-encounter/index
 * @category Journal API
 */
export interface APIJournalEncountersIndex {
    _links: linksStruct;
    encounters: refStruct[];
}

/**
 * Journal Encounter
 * 
 * /data/wow/journal-encounter/{journalEncounterId}
 * @category Journal API
 */
export interface APIJournalEncounter {
    _links: linksStruct;
    id: number;
    name: string;
    description?: string;
    creatures: {
        id?: number;
        name?: string;
        creature_display?: idkeyStruct;
    };
    items: {
        id?: number;
        item?: refStruct;
    };
    sections: journalEncounterSection[];
    instance: refStruct;
    category: {
        type: string;
    };
    modes: {
        type?: string;
        name?: string;
    }[]
}

/**
 * @category Journal API
 */
export interface journalEncounterSection {
    id?: number;
    title?: string;
    body_text?: string;
    sections?: journalEncounterSection[];
    creature_display?: idkeyStruct;
}

/**
 * Journal Encounter Search
 * 
 * /data/wow/search/journal-encounter
 * @category Journal API
 */
export interface APIJournalEncounterSearch extends APISearch {
    results: APIJournalEncounterSearchItem[];
}

/**
 * @category Journal API
 */
export interface APIJournalEncounterSearchItem extends APISearchResult {
    data: {
        instance: {
            name: regionedNameStruct;
            id: number;
        }
        modes: {
            type: string;
            name: regionedNameStruct;
        };
        creatures: {
            id: number;
            name: regionedNameStruct;
            creature_display?: idkeyStruct;
        };
        id: number;
        name: regionedNameStruct;
        category: {
            type: string;
        }
        items: {
            item: {
                name: regionedNameStruct;
                id: number;
            }
            id: number;
        }
        sections: journalEncounterSearchSection[];
    }
}

/**
 * @category Journal API
 */
export interface journalEncounterSearchSection {
    id: number;
    title: regionedNameStruct;
    sections: journalEncounterSearchSection[];
}

//region Journal Instances

/**
 * Journal Instances Index
 * 
 * /data/wow/journal-instance/index
 * @category Journal API
 */
export interface APIJournalInstancesIndex {
    _links: linksStruct;
    Instances: refStruct[];
}

/**
 * Journal Instance
 * 
 * /data/wow/journal-instance/{journalInstanceId}
 * @category Journal API
 */
export interface APIJournalInstance {
    _links?: linksStruct;
    name: string;
    map?: idNameStruct;
    area?: idNameStruct;
    description?: string;
    encounters?: refStruct[];
    media?: idkeyStruct;
    minimum_level: number;
    category: {
        type: string;
    }
    order_index: number;
}

/**
 * Journal Instance Media
 * 
 * /data/wow/media/journal-instance/{journalInstanceId}
 * @category Journal API
 */
export interface APIJournalInstanceMedia extends APIMediaStruct {
}

