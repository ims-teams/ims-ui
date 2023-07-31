<template>
  <a-select
    :class="prefixCls"
    v-bind="$attrs"
    :options="optionsData"
    :loading="loading"
  ></a-select>
</template>
<script lang="ts" setup>
import { useStyle } from "@ims-ui/hooks";
import { ImsSelectProps } from "@ims-ui/types";
import type { Method } from "alova";
// cascader
const { prefixCls } = useStyle("select");

const COMPONENT_NAME = "ImsSelect";
defineOptions({
  name: COMPONENT_NAME,
});

const loading = ref(false);

const { api, options, params } = defineProps<ImsSelectProps>();

const optionsData = ref<ImsSelectProps["options"]>([]);

const getOptions = async () => {
  if (options) {
    optionsData.value = options;
    return;
  }
  if (api) {
    loading.value = true;
    const apiMethod = api(params) as Method;
    apiMethod.setName("api-select");
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
@prefix-cls: ~"@{namespace}-select";

.@{prefix-cls} {
  --at-apply: min-w-100px w-full;
}
</style>
