/**
 * @categoryDescription PvP Tier API
 * PvP Tier API Return Types
 */

import { hrefStruct, linksStruct, idkeyStruct, refStruct, APIMediaStruct } from "../shared";


/**
 * PvP Tiers Index
 * 
 * /data/wow/pvp-tier/index 
 * @category PvP Tier API
 */
export interface APIPvPTiersIndex {
    _links: linksStruct;
    tiers: refStruct[];
} 

/**
 * PvP Tier
 * 
 * /data/wow/pvp-tier/{pvpTierId} 
 * @category PvP Tier API
 */
export interface APIPvPTier {
    _links: linksStruct;
    id: number;
    name: string;
    min_rating: number;
    max_rating: number;
    media: idkeyStruct;
    bracket: {
        id: number;
        type: string;
    }
    rating_type: number;
} 

    
/** 
 * PvP Tier Media
 * 
 * /data/wow/media/pvp-tier/{pvpTierId} 
 * @category PvP Tier API
 */
export interface APIPlayableClassMedia extends APIMediaStruct {
}

