import { Persistent, type BasicKeys } from "../cache/persistent";

import projectSetting from "@/settings/projectSetting";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  CacheTypeEnum,
} from "@ims-ui/enums";

const { permissionCacheType } = projectSetting;

const isLocal = permissionCacheType === CacheTypeEnum.LOCAL;

export function getToken(key: BasicKeys = ACCESS_TOKEN_KEY) {
  return getAuthCache(key);
}

export function getAuthCache<T>(key: BasicKeys) {
  const fn = isLocal ? Persistent.getLocal : Persistent.getSession;
  return fn(key) as T;
}

export function setAuthCache(key: BasicKeys, value: any) {
  const fn = isLocal ? Persistent.setLocal : Persistent.setSession;
  return fn(key, value, true);
}

export function clearAuthCache(immediate = true) {
  const fn = isLocal ? Persistent.clearLocal : Persistent.clearSession;
  return fn(immediate);
}
