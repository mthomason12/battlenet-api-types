/**
 * @categoryDescription Creature API
 * Creature API Return Types
 * @module
 */

import { APISearch, APISearchResult, assetStruct, idkeyStruct, linksStruct, APIMediaStruct, mediaStruct, refStruct, regionedNameStruct } from "../shared";

//region Creature

/**
 * Creature
 * 
 * /data/wow/creature/{creatureId}
 * @category Creature API
 */
export interface APICreature {
    _links: linksStruct;
    id: number;
    name: string;
    type: refStruct;
    family: refStruct;
    creature_displays: idkeyStruct[];
    is_tameable: boolean;
}

//region Creature Search


/**
 * Creature Search
 * 
 * /data/wow/search/creature/
 * @category Creature API
 */
export interface APICreatureSearch extends APISearch {
    results: APICreatureSearchItem[];
}

/**
 * @category Creature API
 */
export interface APICreatureSearchItem extends APISearchResult {
    data: {
        creature_displays?: {
            id: number;
        }[];
        is_tameable: boolean;
        name: regionedNameStruct;
        id: number;
        type: {
            name: regionedNameStruct;
            id: number;
        }
        family: {
            name: regionedNameStruct;
            id: number;
        }        
    }
}

//region Creature Display Media

/**
 * Creature Display Media
 * 
 * /data/wow/media/creature-display/{creatureDisplayId}
 * @category Creature API
 */
export interface APICreatureDisplayMedia {
    _links: linksStruct;
    assets: assetStruct;
    id: number;
}

//region Creature Families

/**
 * Creature Families Index
 * 
 * /data/wow/creature-family/index
 * @category Creature API
 */
export interface APICreatureFamiliesIndex {
    _links: linksStruct;
    creature_families: refStruct[];
}

/**
 * Creature Family
 * 
 * /data/wow/creature-family/{creatureFamilyId}
 * @category Creature API
 */
export interface APICreatureFamily {
  _links: linksStruct;
  id: number;
  name: string;
  specialization: refStruct;
  media: mediaStruct;
}

/**
 * Creature Family Media
 * 
 * /data/wow/media/creature-family/{creatureFamilyId}
 * @category Creature API
 */
export interface APICreatureFamilyMedia extends APIMediaStruct {    
}

//region Creature Types

/**
 * Creature Types Index
 * 
 * /data/wow/creature-type/index
 * @category Creature API
 */
export interface APICreatureTypesIndex {
    _links: linksStruct;
    creature_types: refStruct[];
}

/**
 * Creature Type
 * 
 * /data/wow/creature-type/{creatureTypeId}
 * @category Creature API
 */
export interface APICreatureType {
  _links: linksStruct;
  id: number;
  name: string;
}


