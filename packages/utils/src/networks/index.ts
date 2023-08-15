// import { defHttp } from "./axios";

import type { NrlType } from "@ims-ui/types";
import { getEnvs } from "@ims-ui/utils";
// const { VITE_NRL } = getEnvs();
// import

export * from "./alova";

export * from "./axios";

// export function getAuthCache<T>(key: BasicKeys) {
//   const fn = isLocal ? Persistent.getLocal : Persistent.getSession;
//   return fn(key) as T;
// }

/**
 * @description 创建网络请求
 */
export function createNetWork<T>(options?: Recordable, nrl?: NrlType) {
  if (nrl === undefined) {
    const { VITE_NRL } = getEnvs();
    nrl = VITE_NRL;
  }

  // if(nrl == )

  return {
    a: "aa",
    b: "bb",
  } as T;
}
