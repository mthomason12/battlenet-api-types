/**
 * @categoryDescription Character Achievements API
 * Character Achievements API
 * @module
 */

import { linksStruct, refStruct, characterRef, hrefStruct } from "../shared";

/**
 * Character Achievements Summary 
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/achievements
 * @category Character Achievements API
 */
export interface APICharacterAchievementsSummary {
    _links: linksStruct;
    total_quantity: number;
    total_points: number;
    achievements: characterAchievement[];
    character: characterRef;
    statistics: hrefStruct;
}

/**
 * Part of {@link APICharacterAchievementsSummary}
 * @category Character Achievements API
 */
export interface characterAchievement {
    id: number;
    achievement: refStruct;
    criteria: characterAchievementCriteria[]
    completed_timestamp: number;
}

/**
 * Part of {@link APICharacterAchievementsSummary}
 * @category Character Achievements API
 */
export interface characterAchievementCriteria
{
    id: number;
    is_completed: boolean;
    child_criteria?: characterAchievementCriteria[];
}

/**
 * Character Achievements Statistics 
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/achievements/statistics
 * @category Character Achievements API
 */
export interface APICharacterAchievementsStatistics {
    _links: linksStruct;    
    character: characterRef;
    categories: characterAchievementStatisticsCategory[];
}

/**
 * @category Character Achievements API
 */
export interface characterAchievementStatisticsCategory {
    id: number;
    name: string;
    statistics?: {
        id: number;
        name: string;
        last_updated_timestamp: number;
        description?: string;
        quantity: number;
    };
    sub_categories?: characterAchievementStatisticsCategory[];
}


