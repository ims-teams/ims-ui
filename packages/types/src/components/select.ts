import type { Method } from "alova";
import type { SelectProps as ASelectProps } from "ant-design-vue";

export interface ImsSelectProps {
  /** options 接口 */
  optionsApi?: Method | undefined;
  options?: ASelectProps["options"];
}
