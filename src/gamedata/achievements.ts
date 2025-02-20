/**
 * @category Achievements API
 * Achievement API Return Types
 * @module
 * 
 */


import { linksStruct, APIMediaStruct, idkeyStruct, refStruct } from "../shared";

/**
 * Achievements Index
 * 
 * /data/wow/achievement/index
 * @category Achievements API
 */
export interface APIAchievementsIndex {
    _links: linksStruct;
    achievements: refStruct[];
}

//region Achievement

/**
 * Achievement
 * 
 * /data/wow/achievement/{achievementId}
 * @category Achievements API
 */
export interface APIAchievement {
    _links: linksStruct;
    id: number;
    category?: refStruct;
    name: string;
    description?: string;
    points?: number;
    is_account_wide?: string;
    criteria?: {
        id: number;
        description?: string;
        amount?: number;
        operator?: {
            type: string; //known values: AND, COMPLETE_AT_LEAST
            name: string;
        }
        child_criteria?: achievementChildCriteria[];
    }
    next_achievement?: refStruct;
    media?: idkeyStruct;
    display_order?: number;
}


/**
 * Part of APIAchievement
 * @category Achievements API
 */
export interface achievementChildCriteria {
    id: number;
    description?: string;
    amount?: number;
    achievement?: refStruct;
}

//region Achievement Media

/**
 * Achievement Media
 * 
 * /data/wow/media/achievement/{achievementId}
 * @category Achievements API
 */
export interface APIAchievementMedia extends APIMediaStruct {
}

//region Achievement Categories

/**
 * Achievement Categories Index
 * 
 * /data/wow/media/achievement-category/index
 * @category Achievements API
 */
export interface APIAchievementCategoriesIndex {
    _links: linksStruct;
    categories: refStruct[];
}


/**
 * Achievement Category
 * 
 * /data/wow/media/achievement-category/{achievementCategoryId}
 * @category Achievements API
 */
export interface APIAchievementCategory {
    _links: linksStruct;
    id: number;
    name: string;
    achievements: refStruct[];
    is_guild_category: boolean;
    aggregates_by_faction: {
        alliance: {
            quantity: number;
            points: number;
        }
        horde: {
            quantity: number;
            points: number;
        }
    }
    display_order: number;
}



