<template>
  <a-cascader
    :class="prefixCls"
    v-bind="$attrs"
    :options="optionsData"
    :loading="loading"
  ></a-cascader>
</template>
<script lang="ts" setup>
import { useStyle } from "@ims-ui/hooks";
import { getEnvs, createNetWork } from "@ims-ui/utils";
import { ImsCascaderProps } from "@ims-ui/types";
import type { Method } from "alova";

const { prefixCls } = useStyle("cascader");

import { isFunction } from "@vue/shared";

const network = createNetWork({ aa: "bb", dd: "dd" });

console.info("network =>", network);

// const { pkg, lastBuildTime } = __APP_INFO__;

const COMPONENT_NAME = "ImsCascader";
defineOptions({
  name: COMPONENT_NAME,
});

const loading = ref(false);
const { api, options, params } = defineProps<ImsCascaderProps>();
const optionsData = ref<ImsCascaderProps["options"]>([]);

const getOptions = async () => {
  if (options) {
    optionsData.value = options;
    return;
  }
  // console.info("isFunction =>", );
  if (isFunction(api)) {
    loading.value = true;
    const apiMethod = api(params) as Method;
    apiMethod.setName("api-cascader");
    const res = await apiMethod.send(true);
    loading.value = false;
    optionsData.value = res || [];
  } else {
    // 使用 network 发送请求 获取组件需要的数据
  }
};

(async () => {
  getOptions();
})();

watch(
  () => params,
  () => {
    getOptions();
  },
  {
    deep: true,
  }
);

watch(
  () => options,
  () => {
    getOptions();
  },
  {
    deep: true,
  }
);
</script>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-cascader";

.@{prefix-cls} {
  --at-apply: min-w-400px w-full;
}
</style>
