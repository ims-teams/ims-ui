<template>
  <div  :class="prefixCls" >
      ddd
  </div>
</template>
<script lang="ts" setup>
import { useStyle } from "@ims-ui/hooks";

const COMPONENT_NAME = "ImsEditor";
defineOptions({
  name: COMPONENT_NAME,
});

const { prefixCls } = useStyle("editor");
</script>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-editor";

.@{prefix-cls} {
  border: 1px solid red;
  --at-apply: flex justify-center items-center;
}
</style>
