/**
 * @categoryDescription Profession API
 * Profession API Return Types
 */

import { assetStruct, idkeyStruct, linksStruct, refStruct } from "../shared";

/**
 * Professions Index
 * 
 * /data/wow/profession/index
 * @category Profession API
 */
export interface APIProfessionsIndex {
    _links: linksStruct;
    professions: refStruct[];
}


/**
 * Profession
 * 
 * /data/wow/profession/{professionId}
 * @category Profession API
 */
export interface APIProfession {
    _links: linksStruct;
    id: number;
    name: string;
    description: string;
    type: {
        type: string;
        name: string;
    }
    media: idkeyStruct;
    skill_tiers: refStruct[];
}

/**
 * Profession Media
 * 
 * /data/wow/media/profession/{professionId}
 * @category Profession API
 * 
 */
export interface APIProfessionMedia {
    _links: linksStruct;
    assets: assetStruct;
    id: number;
}


/**
 * Profession Skill Tier
 * 
 * /data/wow/profession/{professionId}/skill-tier/{skillTierId}
 * @category Profession API
 */
export interface APIProfessionSkillTier {
    _links: linksStruct;
    id: number;
    name: string;
    minimum_skill_level: number;
    maximum_skill_level: number;
    categories: {
        name: string;
        recipes: refStruct[];
    }[]
}


/**
 * Recipe
 * 
 * /data/wow/recipe/{recipeId}
 * @category Profession API
 */
export interface APIRecipe {
    _links: linksStruct;
    id: number;
    name: string;
    media: idkeyStruct;
    crafted_item: refStruct;
    reagents: {
        reagent: refStruct;
        quantity: number;
    }[]
    crafted_quantity: {
        value: number;
    }
}


/**
 * Recipe Media
 * 
 * /data/wow/media/recipe/{professionId}
 * @category Profession API
 */
export interface APIRecipeMedia {
    _links: linksStruct;
    assets: assetStruct;
    id: number;
}
