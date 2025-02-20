/**
 * @categoryDescription Covenants API
 * Covenants API Return Types
 * @module
 */

import { hrefStruct, idNameStruct, linksStruct, idkeyStruct, refStruct, spellTooltip } from "../shared";

//region Covenants

/**
 * Covenants Index
 * 
 * /data/wow/covenants/index
 * @category Covenants API
 */
export interface APICovenantIndex {
  _links: linksStruct;
  covenants: APICovenantItem[];
}

/**
 * @category Covenants API
 */
export interface APICovenantItem {
  id: number;
  name: string;
  key: hrefStruct;
}

/**
 * Covenant
 * 
 * /data/wow/covenants/{covenantID}
 * @category Covenants API
 */
export interface APICovenant 
{
  _links: linksStruct;
  id: number;
  name: string;
  description?: string;
  signature_ability?: {
    id: number;
    spell_tooltip: spellTooltip;
  };
  class_abilities?: covenantClassAbility[];
  soulbinds?: refStruct[];
  renown_rewards?: {
    level: number;
    reward: refStruct;
  }[];
  media?: idkeyStruct;
}

/**
 * @category Covenants API
 */
export interface covenantClassAbility
{
  id: number;
  playable_class: refStruct;
  spell_tooltip: spellTooltip;
}

//region Soulbinds

/**
 * Soulbind Index
 * 
 * /data/wow/soulbind/index
 * @category Covenants API
 */
export interface APISoulbindIndex {
    _links: linksStruct;
    soulbinds: refStruct[];
}

/**
 * Soulbind
 * 
 * /data/wow/soulbind/{soulbindID}
 * @category Covenants API
 */
export interface APISoulbind {
    _links: linksStruct;
    id: number;
    name: string;
    covenant: refStruct;
    creature: refStruct;
    follower: idNameStruct;
    talent_tree: refStruct;
}