<template>
  <div :class="prefixCls" :style="`max-height: ${height}px;`">
    <a-typography-text strong>{{ title }}</a-typography-text>
    <div>ims json viewer</div>
    <vue-json-pretty v-bind="$attrs" />
  </div>
</template>

<script lang="ts" setup>
import VueJsonPretty from "vue-json-pretty";
import { ImsJsonViewerProps } from "@ims-ui/types";
import { useStyle } from "@ims-ui/hooks";
const COMPONENT_NAME = "ImsJsonViewer";
defineOptions({
  name: COMPONENT_NAME,
});

withDefaults(defineProps<ImsJsonViewerProps>(), {
  height: () => 400,
});
const { prefixCls } = useStyle("json-viewer");
</script>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-json-viewer";

.@{prefix-cls} {
  border: 1px dashed gray;
  --at-apply: p-2 mb-2;
  overflow: auto;
}
</style>
