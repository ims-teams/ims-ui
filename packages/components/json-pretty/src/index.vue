<template>
  <div :class="prefixCls" :style="`max-height: ${height}px;`">
    <a-typography-text strong>{{ title }}</a-typography-text>
    <vue-json-pretty v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { JsonPrettyProps } from "@ims-ui/types";
import { useStyle } from "@ims-ui/hooks";
const COMPONENT_NAME = "ImsJsonPretty";
defineOptions({
  name: COMPONENT_NAME,
});

withDefaults(defineProps<JsonPrettyProps>(), {
  height: () => 400,
});
const { prefixCls } = useStyle("json-pretty");
</script>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-json-pretty";

.@{prefix-cls} {
  border: 1px dashed gray;
  --at-apply: p-2 mb-2;
  overflow: auto;
}
</style>
