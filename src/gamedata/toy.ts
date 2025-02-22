/**
 * @categoryDescription Toy API
 * Toy API Return Types
 * @module
 */

import { idkeyStruct, linksStruct, refStruct } from "../shared";


/**
 * Toy Index
 * 
 * /data/wow/toy/index
 * @category Toy API
 */
export interface APIToyIndex {
    _links: linksStruct;
    toys: refStruct[];
}

/**
 * Toy
 * 
 * /data/wow/toy/{{toyId}}
 * @category Toy API
 */
export interface APIToy {
    _links?: linksStruct;
    id: number;
    item: refStruct;
    source?: {
        type: string;
        name: string;
    }
    should_exclude_if_uncollected?: boolean;
    media: idkeyStruct;
}