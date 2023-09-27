import type { SelectProps as ASelectProps } from "ant-design-vue";

import type { TableColumnType } from "ant-design-vue";

export interface ImsFormTableColumn extends TableColumnType {
  /**
   * 组件
   */
  component: object & {
    /**
     * 组件标识/标签 名称
     */
    name: string;

    /**
     * 组件 v-model key value check
     */
    model?: string;
    /**
     * 组件 props
     */
    props?: {
      [key: string]: any;
    };
  };
}

export interface ImsFormTableProps {
  /** options 接口函数 */
  api?:
    | Function
    | {
        uri: string;
        params?: object;
        options?: object;
      };
  /** 接口参数 */
  params?: {
    [key: string]: any;
  };
  options?: ASelectProps["options"];
  columns: ImsFormTableColumn[];
  /**
   * 表格数据
   */
  dataList?: object[];
  /**
   * 初始化
   */
  initial: object;
}
