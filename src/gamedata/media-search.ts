/**
 * @categoryDescription Media Search API
 * Media Search API Return Types
 * @module
 */

import { APISearch, APISearchResult, assetStruct } from "../shared";

/**
 * Media Search
 * 
 * /data/wow/search/media
 * @category Media Search API
 */
export interface APIMediaSearch extends APISearch {
    results: APIMediaSearchItem[];
}

/**
 * @category Media Search API
 */
export interface APIMediaSearchItem extends APISearchResult {
    data: {
        assets: assetStruct[];
        id: number;
    }
}