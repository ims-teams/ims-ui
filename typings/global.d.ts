import type {
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType,
} from "vue";

declare global {
  /**
   * 任意类型的异步函数
   */
  type AnyPromiseFunction = (...arg: any[]) => PromiseLike<any>;

  /**
   * 任意类型的普通函数
   */
  type AnyNormalFunction = (...arg: any[]) => any;

  /**
   * 任意类型的函数
   */
  type AnyFunction = AnyNormalFunction | AnyPromiseFunction;

  /**
   *  T | null 包装
   */
  type Nullable<T> = T | null;

  /**
   * 字符串类型对象（只读）
   */
  interface ReadonlyRecordable<T = any> {
    readonly [key: string]: T;
  }

  /**
   * setTimeout 返回值类型
   */
  type TimeoutHandle = ReturnType<typeof setTimeout>;

  /**
   * setInterval 返回值类型
   */
  type IntervalHandle = ReturnType<typeof setInterval>;

  type Recordable<T = any> = Record<string, T>;

  const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

  // vue
  type PropType<T> = VuePropType<T>;
  type VueNode = VNodeChild | JSX.Element;
  //
  type Writable<T> = {
    -readonly [P in keyof T]: T[P];
  };

  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean;
  }

  interface ViteEnv {
    VITE_PORT: number;
    VITE_USE_SERVER_HTTPS: boolean;
    VITE_USE_MOCK: boolean;
    VITE_USE_PWA: boolean;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: [string, string][];
    VITE_GLOB_APP_TITLE: string;
    VITE_GLOB_APP_SHORT_NAME: string;
    VITE_USE_CDN: boolean;
    VITE_DROP_CONSOLE: boolean;
    VITE_BUILD_COMPRESS: "gzip" | "brotli" | "none";
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VITE_LEGACY: boolean;
    VITE_USE_IMAGEMIN: boolean;
    VITE_GENERATE_UI: string;
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }
}

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
