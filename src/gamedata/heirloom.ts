/**
 * @categoryDescription Heirloom API
 * Heirloom API
 */

import { hrefStruct, idkeyStruct, itemStatStruct, itemStatValueStruct, linksStruct, refStruct, weaponStruct } from "../shared";

/**
 * Heirloom Index
 * 
 * /data/wow/heirloom/index
 * @category Heirloom API
 */
export interface APIHeirloomIndex {
    _links: linksStruct;
    heirlooms: refStruct[];
}

/**
 * Heirloom
 * 
 * /data/wow/heirloom/{heirloomId}
 * @category Heirloom API
 */
export interface APIHeirloom {
    _links: linksStruct;
    id: number;
    item: refStruct;
    source: {
        type: string;
        name: string;
    }
    source_description: string;
    upgrades: {
        item: {
            item: refStruct;
            context: number;
            bonus_list: number[];
            quality: {
                type: string;
                name: string;
            }
            name: string;
            media: idkeyStruct;
            item_class: refStruct;
            item_subclass: refStruct;
            inventory_type: {
                type: string;
                name: string;
            }
            binding:  {
                type: string;
                name: string;
            }
            weapon?: weaponStruct;
            armor?: itemStatValueStruct,
            shield_block?: itemStatValueStruct,            
            stats?: itemStatStruct;
            upgrades: {
                value: number;
                max_value: number;
                display_string: string;
            }
            requirements: {
                level?: {
                    value: number,
                    display_string: string
                }
                playable_classes?: {
                    links: hrefStruct;
                    display_string: string;
                }
            },
            level?: {
                value: number,
                display_string: string
            },
        }
        level: number;
    }[]
    media: idkeyStruct;
}