<template>
  <a-select
    :class="prefixCls"
    v-bind="$attrs"
    :options="optionsData"
  ></a-select>
</template>
<script lang="ts" setup>
import { useStyle } from "@ims-ui/hooks";
import { ImsSelectProps } from "@ims-ui/types";

// import { useRequest } from 'alova';

const { prefixCls } = useStyle("select");

const COMPONENT_NAME = "ImsSelect";
defineOptions({
  name: COMPONENT_NAME,
});

const props = defineProps<ImsSelectProps>();

const { optionsApi, options } = props;

console.info("props =>", optionsApi);

const optionsData = ref<ImsSelectProps["options"]>([]);
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
@prefix-cls: ~"@{namespace}-select";

.@{prefix-cls} {
  // border: 1px solid red;
  --at-apply: min-w-100px w-full;
}
</style>
