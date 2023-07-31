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
import { ImsCascaderProps } from "@ims-ui/types";
import type { Method } from "alova";
//
const { prefixCls } = useStyle("cascader");

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
  if (api) {
    loading.value = true;
    const apiMethod = api(params) as Method;
    apiMethod.setName("api-cascader");
    const res = await apiMethod.send(true);
    loading.value = false;
    optionsData.value = res || [];
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
