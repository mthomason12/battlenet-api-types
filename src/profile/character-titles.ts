/**
 * @categoryDescription Character Titles API
 * Character Titles API
 * @module
 */

import { linksStruct, characterRef, refStruct } from "../shared";


/**
 * Character Titles Summary
 * 
 * /profile/wow/character/{realmSlug}/{characterName}/titles
 * @category Character Titles API
 */
export interface APICharacterTitles {
    _links: linksStruct;
    character: characterRef;
    active_title?: refStruct;
    titles: refStruct[];
}