/**
 * @categoryDescription Region API
 * Region API Return Types
 * @module
 */

import { hrefStruct, linksStruct } from "../shared";


/**
 * Regions Index
 * 
 * /data/wow/region/index
 * @category Region API
 */
export interface APIRegionsIndex
{
  _links: linksStruct;
  regions: hrefStruct[];
}


/**
 * Region
 * 
 * /data/wow/region/{{regionId}}
 * @category Region API
 */
export interface APIRegion {
    _links: linksStruct;
    id: number;
    name: string;
    tag: string;
    patch_string: string;
}