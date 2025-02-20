/**
 * @categoryDescription Guild Crest API
 * Guild Crest API
 * @module
 */

import { keyValueStruct, linksStruct, idkeyStruct, rgbaColorStruct } from "../shared";

/**
 * Guild Crest Components Index
 * 
 * /data/wow/guild-crest/index
 * @category Guild Crest API
 */
export interface APIGuildCrestComponentsIndex {
    _links: linksStruct;
    emblems: {
        id: number;
        media: idkeyStruct;
    }[]
    borders: {
        id: number;
        media: idkeyStruct;
    }[]    
    colors: {
        emblems: {
            id: number;
            rgba: rgbaColorStruct;
        }
        borders: {
            id: number;
            rgba: rgbaColorStruct;
        }   
        backgrounds: {
            id: number;
            rgba: rgbaColorStruct;
        }                
    }
}


/**
 * Guild Crest Border Media
 * 
 * /data/wow/media/guild-crest/border/{borderId}
 * @category Guild Crest API
 * 
 */
export interface APIGuildCrestBorderMedia {
    _links: linksStruct;
    assets: keyValueStruct[];
    id: number;
}


/**
 * Guild Crest Emblem Media
 * 
 * /data/wow/media/guild-crest/emblem/{emblemId}
 * @category Guild Crest API
 */
export interface APIGuildCrestEmblemMedia {
    _links: linksStruct;
    assets: keyValueStruct[];
    id: number;
}
