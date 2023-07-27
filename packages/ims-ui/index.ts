import installer from "./src/defaults";
export * from "@ims-ui/hooks";
export * from "@ims-ui/utils";
export * from "@ims-ui/components";

export * from "./src/make-installer";

// 类型导出
export * from "@ims-ui/types";

export const install = installer.install;
export const version = installer.version;
export default installer;
