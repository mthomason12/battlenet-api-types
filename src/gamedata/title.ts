/**
 * @categoryDescription Title API
 * Title API Return Types
 * @module
 */

import { linksStruct, refStruct } from "../shared";


/**
 * Title Index
 * 
 * /data/wow/title/index
 * @category Title API
 */
export interface APITitleIndex {
    _links: linksStruct;
    titles: refStruct[];
}

/**
 * Title
 * 
 * /data/wow/title/{{titleId}}
 * @category Title API
 */
export interface APITitle {
    _links?: linksStruct;
    id: number;
    name: string;
    gender_name: {
        male: string;
        female: string;
    }
}