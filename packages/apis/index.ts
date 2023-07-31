import { alova } from "@ims-ui/utils";
export const nodeUri = "stage/v1/nodes";

/**
 * 节点列表
 * @param params
 * @returns
 */
export const getNodes = (params?: object) => {
  return alova.Get(`${nodeUri}`, {
    // immediate
    // immediate: immediate,
    name: "getNodes",
    params,
  });
};
