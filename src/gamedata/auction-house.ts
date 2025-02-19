/**
 * @categoryDescription Auction House API
 * Auction House API Return Types
 * @module
 */

import { hrefStruct, linksStruct } from "../shared";



//region Auctions

/**
 * Auctions
 * 
 * /data/wow/connected-realm/{connectedRealmId}/auctions
 * @category Auction House API
 */
export interface APIAuctions {
    _links: linksStruct;
    connected_realm: hrefStruct;
    auctions: APIAuctionsItem[];
}

/**
 * Individual auction from @see APIAuctions
 * @category Auction House API
 */
export interface APIAuctionsItem {
    id: number;
    item: {
        id: number;
        context: number;
        bonus_lists?: number[];
        modifiers?: {
            type: number;
            value: number;
        }[];
    }
    buyout: number;
    quantity: number;
    time_left: string;
}

//region Commodities

/**
 * Commodities
 * 
 * /data/wow/auctions/commodities
 * 
 * This currently appears to be broken, returning a truncated result
 * @category Auction House API
 */
export interface APICommodities {

}