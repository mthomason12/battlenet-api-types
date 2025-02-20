/**
 * @categoryDescription Realm API
 * Realm API Return Types
 * @module
 */

import { APISearch, APISearchResult, hrefStruct, linksStruct, refStruct, regionedNameStruct } from "../shared";

/**
 * Realms Index
 * 
 * /data/wow/realm/index
 * @category Realm API
 */
export interface APIRealmsIndex
{
  _links: linksStruct;
  realms: APIRealmsIndexEntry[];
}

/**
 * Individual index entry from @see APIRealmsIndex
 * @category Realm API
 */
export interface APIRealmsIndexEntry extends refStruct
{
  slug: string;
}

/**
 * Realm
 * 
 * /data/wow/realm/{{realmId}}
 * @category Realm API
 */
export interface APIRealm {
    _links: linksStruct;
    id: number;
    region: refStruct;
    connected_realm: hrefStruct;
    name: string;
    category: string;
    locale: string;
    timezone: string;
    type: {
        type: string;
        name: string;
    };
    is_tournament: boolean;
    slug: string;
}

/**
 * Realm Search
 * 
 * /data/wow/search/realm
 * @category Realm API
 */
export interface APIRealmSearch extends APISearch {
    results: APIRealmSearchResult[];
}

/**
 * @category Realm API
 */
export interface APIRealmSearchResult extends APISearchResult {
    id: number;
    is_tournament: string;
    timezone: string;
    name: regionedNameStruct;
    region: {
        name: regionedNameStruct
        id: number;
    }
    category: {
        name: regionedNameStruct;
    }
    locale: string;
    type: {
        name: regionedNameStruct
        type: string;
    }
    slug: string;
}



