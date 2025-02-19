/**
 * Power Type API Return Types
 */

import { linksStruct, refStruct } from "../shared";


/**
 * Power Types Index
 * 
 * /data/wow/power-type/index
 * 
 */
export interface APIPowerTypesIndex {
    _links: linksStruct;
    power_types: refStruct[];
}


/**
 * Power Type
 * 
 * /data/wow/power-type/{powerTypeId}
 */
export interface APIPowerType {
    _links: linksStruct;
    id: number;
    name: string;
}