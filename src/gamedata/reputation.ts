/**
 * @categoryDescription Reputation API
 * Reputation API Return Types
 * @module
 */

import { factionStruct, hrefStruct, linksStruct, refStruct } from "../shared";

//region Reputation Faction

/**
 * Reputation Faction Index
 * 
 * /data/wow/reputation-faction/index
 * @category Reputation API
 */
export interface APIReputationFactionIndex {
    _links: linksStruct;
    factions: refStruct[];
  }

/**
 * Reputation Faction 
 * 
 * /data/wow/reputation-faction/{{reputationFactionId}}
 * @category Reputation API
 */
export interface APIReputationFaction {
    _links?: linksStruct;
    id: number;
    name: string;
    description: string;
    reputation_tiers: {
        key: hrefStruct;
        name?: string;
        id: number;
    }
    player_faction?: factionStruct;
}

//region Reputation Tier

/**
 * Reputation Tier Index
 * 
 * /data/wow/reputation-tier/index
 * @category Reputation API
 */
export interface APIReputationTierIndex {
    _links: linksStruct;
    reputation_tiers: refStruct[];
}

/**
 * Reputation Tier
 * 
 * /data/wow/reputation-tier/{{reputationTierId}}
 * @category Reputation API
 */
export interface APIReputationTier {
    _links?: linksStruct;
    id: number;
    tiers: {
      name: string;
      min_value: number;
      max_number: number;
      id: number;
    }[];
    faction: refStruct;
}