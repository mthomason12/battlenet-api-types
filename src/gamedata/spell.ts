/**
 * @categoryDescription Spell API
 * Spell API Return Types
 * @module
 */

import { APIMediaStruct, APISearch, APISearchResult, idkeyStruct, linksStruct, regionedNameStruct } from "../shared";

/**
 * Spell
 * 
 * /data/wow/spell/{spellID}
 * @category Spell API
 */
export interface APISpell
{
  _links: linksStruct;
  id: number;
  name: string;
  description: string;
  media: idkeyStruct;   
}

/** 
 * Spell Media
 * 
 * /data/wow/media/spell/{spellrId} 
 * @category Spell API
 */
export interface APISpellMedia extends APIMediaStruct {
}


/**
 * Spell Search
 * 
 * /data/wow/search/spell/
 * @category Spell API
 */
export interface APISpellSearch extends APISearch {
    results: APISpellSearchItem[];
}

/**
 * @category Spell API
 */
export interface APISpellSearchItem extends APISearchResult
{
    data: {
        name: regionedNameStruct,
        id: number,
        media: {
            id: number;
        }
    }
}