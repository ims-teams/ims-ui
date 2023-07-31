import type { SelectProps as ASelectProps } from "ant-design-vue";
export interface ImsSelectProps {
  /** api 接口函数 */
  api?: Function;
  /** 接口参数 */
  params?: {
    [key: string]: any;
  };
  options?: ASelectProps["options"];
}
