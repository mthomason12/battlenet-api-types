/**
 * @categoryDescription WoW Token API
 * WoW Token API Return Types
 * @module
 */

import { linksStruct } from "../shared";


/**
 * WoW Token Index
 * 
 * /data/wow/token/index 
 * @category WoW Token API
 */
export interface APIWoWTokenIndex {
    _links: linksStruct;
    last_updated_timestamp: number;
    price: number;
}
