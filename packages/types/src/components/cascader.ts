import type { Method } from 'alova';
import type { CascaderProps as ACascaderProps } from 'ant-design-vue';

export interface CascaderProps {
  /** options 接口 */
  optionsApi?: Method | undefined;
  options?: ACascaderProps['options'];
}
