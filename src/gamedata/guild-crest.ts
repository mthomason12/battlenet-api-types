/**
 * Guild Crest API
 */

import { keyValueStruct, linksStruct, mediaStruct, rgbaColorStruct } from "../shared";

/**
 * Guild Crest Components Index
 * /data/wow/guild-crest/index
 * 
 */
export interface APIGuildCrestComponentsIndex {
    _links: linksStruct;
    emblems: {
        id: number;
        media: mediaStruct;
    }[]
    borders: {
        id: number;
        media: mediaStruct;
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
 * /data/wow/media/guild-crest/border/{borderId}
 * 
 */
export interface APIGuildCrestBorderMedia {
    _links: linksStruct;
    assets: keyValueStruct[];
    id: number;
}


/**
 * Guild Crest Emblem Media
 * /data/wow/media/guild-crest/emblem/{emblemId}
 * 
 */
export interface APIGuildCrestEmblemMedia {
    _links: linksStruct;
    assets: keyValueStruct[];
    id: number;
}
