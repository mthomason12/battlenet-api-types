/**
 * @categoryDescription Guild API
 * Guild API
 * @module
 */

import { linksStruct, factionStruct, realmStruct, guildCrestStruct, hrefStruct, characterRef, refStruct, idkeyStruct } from "../shared";

/**
 * Guild
 * 
 * /profile/wow/guild/{realmSlug}/{nameSlug}
 * @category Guild API
 */
export interface APIGuild {
    _links: linksStruct;
    id: number;
    name: string;
    faction: factionStruct;
    achievement_points: number;
    member_count: number;
    realm: realmStruct;
    crest: guildCrestStruct;
    roster: hrefStruct;
    achievements: hrefStruct;
    created_timestamp: number;
    activity: hrefStruct;
    name_search: string;
}

/**
 * Guild Activity
 * 
 * /profile/wow/guild/{realmSlug}/{nameSlug}/activity
 * @category Guild API
 */
export interface APIGuildActivity {
    _links: linksStruct;
    guild: {
        key: hrefStruct;
        id: number;
        name: string;
        faction: factionStruct;
        realm: realmStruct;
    }
    activities: (guildEncounterActivity | guildCharacterAchievementActivity)[]
}


/**
 * @category Guild API
 */
export interface guildActivity {
    activity: {
        type: string;
    }
    timestamp: number;
}

/**
 * @category Guild API
 */
export interface guildEncounterActivity extends guildActivity {
    encounter_completed: {
        encounter: refStruct;
        mode: {
            type: string;
            name: string;
        }
    }
}

/**
 * @category Guild API
 */
export interface guildCharacterAchievementActivity extends guildActivity {
    character_achievement: {
        character: characterRef;
        achievement: refStruct;
    }
}

/**
 * Guild Achievements
 * 
 * /profile/wow/guild/{realmSlug}/{nameSlug}/achievements
 * @category Guild API
 */
export interface APIGuildAchievements {
    _links: linksStruct;
    guild: {
        key: hrefStruct;
        id: number;
        name: string;
        faction: factionStruct;
        realm: realmStruct;
    }
    total_quantity: number;
    total_points: number;
    achievements: guildAchievement []
}

/**
 * @category Guild API
 */
export interface guildAchievement {
    id: number;
    achievement: refStruct;
    criteria?: guildAchievementCriteriaStruct;
    completed_timestamp: number;
}

/**
 * @category Guild API
 */
export interface guildAchievementCriteriaStruct {
    id: number;
    amount?: number;
    is_completed: boolean;
    child_criteria?: guildAchievementCriteriaStruct[]
}

/**
 * Guild Roster
 * 
 * /profile/wow/guild/{realmSlug}/{nameSlug}/roster
 * @category Guild API
 */
export interface APIGuildRoster {
    _links: linksStruct;
    guild: {
        key: hrefStruct;
        id: number;
        name: string;
        faction: factionStruct;
        realm: realmStruct;
    }
    members: guildRosterMemberStruct[];
}

/**
 * @category Guild API
 */
export interface guildRosterMemberStruct {
    character: {
        key: hrefStruct;
        name: string;
        id: number;
        realm: realmStruct;
        level: number;
        playable_class: idkeyStruct;
        playable_race: idkeyStruct;
    }
    rank: number;
}

