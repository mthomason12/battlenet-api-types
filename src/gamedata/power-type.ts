/**
 * @categoryDescription Power Type API
 * Power Type API Return Types
 */

import { linksStruct, refStruct } from "../shared";


/**
 * Power Types Index
 * 
 * /data/wow/power-type/index
 * @category Power Type API
 */
export interface APIPowerTypesIndex {
    _links: linksStruct;
    power_types: refStruct[];
}


/**
 * Power Type
 * 
 * /data/wow/power-type/{powerTypeId}
 * @category Power Type API
 */
export interface APIPowerType {
    _links: linksStruct;
    id: number;
    name: string;
}