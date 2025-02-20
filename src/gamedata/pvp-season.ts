/**
 * @categoryDescription PvP Season API
 * PvP Season API Return Types
 */

import { hrefStruct, linksStruct, refStruct } from "../shared";


/**
 * PvP Seasons Index
 * 
 * /data/wow/pvp-season/index 
 * @category PvP Season API
 */
export interface APIPvPSeasonsIndex {
    _links: linksStruct;
    seasons: refStruct[];
} 


/**
 * PvP Season Index
 * 
 * /data/wow/pvp-season/{pvpSeasonId}
 * @category PvP Season API
 */
export interface APIPvPSeason {
    _links: linksStruct;
   id: number;
   leaderboards: hrefStruct;
   rewards: hrefStruct;
   season_start_timestamp: number;
   season_end_timestamp: number;
} 

/**
 * PvP Leaderboards Index
 * 
 * /data/wow/pvp-season/{pvpSeasonId}/pvp-leaderboard/index
 * @category PvP Season API
 */
export interface APIPvPLeqderboardsIndex {
    _links: linksStruct;
    season: refStruct;
    leaderboards: refStruct[];
} 


/**
 * PvP Leaderboard Index
 * 
 * /data/wow/pvp-season/{pvpSeasonId}/pvp-leaderboard/{pvpBracket}
 * @category PvP Season API
 */
export interface APIPvPLeaderboard {
    _links: linksStruct;
    season: refStruct;
    name: string;
    bracket: {
        id: number;
        type: string;
    }
    entries: {
        character: {
            name: string;
            id: string;
            realm: refStruct;
        }
        faction: {
            type: string;
        }
        rank: number;
        rating: number;
        season_match_statistics: {
            played: number;
            won: number;
            lost: number;
        }
        tier: refStruct;
    }[]
} 

/**
 * PvP Rewards Index
 * 
 * /data/wow/pvp-season/{pvpSeasonId}/pvp-reward/index
 * @category PvP Season API
 */
export interface APIPvPLeqderboardsIndex {
    _links: linksStruct;
    season: refStruct;
    rewards: {
        bracket: {
            id: number;
            type: string;
        }
        achievement: hrefStruct;
        rating_cutoff: number;
        faction: {
            type: string;
            name: string;
        }
    }[];
} 


