import type { Method } from "alova";
import type { CascaderProps as ACascaderProps } from "ant-design-vue";

export interface ImsCascaderProps {
  /** options 接口函数 */
  api?: Function;
  /** 接口参数 */
  params?: {
    [key: string]: any;
  };
  options?: ACascaderProps["options"];
}
