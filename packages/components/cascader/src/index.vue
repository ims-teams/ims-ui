<template>
  <a-cascader
    :class="prefixCls"
    v-bind="$attrs"
    :options="optionsData"
  ></a-cascader>
</template>
<script lang="ts" setup>
import { useStyle } from "@ims-ui/hooks";
import { CascaderProps } from "@ims-ui/types";

// import { useRequest } from 'alova';

const { prefixCls } = useStyle("cascader");

const COMPONENT_NAME = "ImsCascader";
defineOptions({
  name: COMPONENT_NAME,
});

const props = defineProps<CascaderProps>();

const { optionsApi, options } = props;

console.info("props =>", optionsApi);

const optionsData = ref<CascaderProps["options"]>([]);
// const apiRes = ref();
// if (optionsApi) {
//   apiRes.value = useRequest(optionsApi, {
//     immediate: false
//   });
// }
const getOptions = async () => {
  if (options) {
    optionsData.value = options;
    return;
  }
  if (optionsApi) {
    // apiRes.value.send();
    const res = await optionsApi?.send();
    optionsData.value = res || [];
  }
};

getOptions();

// let res = optionsApi() as Method;

// const msg = ref('abc');
</script>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-cascader";

.@{prefix-cls} {
  // border: 1px solid red;
  --at-apply: min-w-400px;
}
</style>
