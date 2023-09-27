<template>
  <div :class="prefixCls">
    <ImsJsonViewer
      title="parseedColumns"
      :data="parseedColumns"
      editable
      showLine
    >
    </ImsJsonViewer>
    <a-table
      v-bind="$attrs"
      :columns="parseedColumns"
      :data-source="modelValue"
      @change="onChange"
    >
      <template #headerCell="{ title, column }">
        <template v-if="column.key === 'index'">
          <div>
            <a-button
              size="small"
              type="primary"
              shape="circle"
              @click="onAddRow"
            >
              <icon icon="ant-design:plus-outlined" :inline="true" />
            </a-button>
          </div>
        </template>
      </template>
      
        <template #bodyCell="{ column, text, record, index }">
        <template v-if="column.key === 'index'">
          <div :class="`${prefixCls}-index-wrapper`">
            <div :class="`${prefixCls}-index-wrapper-index index`">
              {{  calcIndex(index) }}
            </div>            
            <div :class="`${prefixCls}-index-wrapper-delete delete`">
              <a-button
                size="small"
                danger
                shape="circle"
                @click="onDeleteRow(index)"
              >
                <icon icon="ant-design:delete-outlined" :inline="true" />
              </a-button>
            </div>
          </div>
        </template>

        <template v-else>
        
          <!-- {{ column.component.model }} -->
          <component
            :is="column.component.name"
            v-bind="column.component.props"
            :class="
              column.component.name === 'ACheckbox' ||
              column.component.name === 'ASwitch'
                ? ''
                : 'w-full'
            "
            v-model:[column.component.model]="record[column.dataIndex]"
          >
          </component>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { useRequest } from "vue-hooks-plus";
import { useStyle } from "@ims-ui/hooks";
import { createNetWork } from "@ims-ui/utils";
import { isFunction, isObject } from "@vue/shared";
import { watch } from "vue";
import { ImsFormTableProps, ImsFormTableColumn } from "@ims-ui/types";
import { Icon } from "@iconify/vue";
import { cloneDeep } from "lodash-es";
import { nanoid } from "nanoid";

import type { PaginationProps } from "ant-design-vue";

const { prefixCls } = useStyle("form-table");

const COMPONENT_NAME = "ImsFormTable";
defineOptions({
  name: COMPONENT_NAME,
});

// const loading = ref(false);
const {
  api,
  options,
  params,
  initial,
  columns,
} = defineProps<ImsFormTableProps>();



const parseedColumns = ref<ImsFormTableColumn[]>([]);

const parseedColumn = () => {
  let hasIndexColumn = false;
  parseedColumns.value = columns.map((column: ImsFormTableColumn) => {
    
    if (!column.component.hasOwnProperty("model") && column.key !== "index") {
      column.component.model = "value";
    }
    if (column.key === "index") {
      hasIndexColumn = true;
    }
    return column;
  });

  if (hasIndexColumn === false) {
    const indexArray = {
        title: "序号",
        dataIndex: "index",
        key: "index",
        align: "center",
        width: 80,
        component: {
          name: "",
        },
      };
    parseedColumns.value.unshift(indexArray as ImsFormTableColumn);
  }
};

parseedColumn();




const currentPagination = ref({
  pageSize:10,
  current:1,
});

const onChange = (pagination:PaginationProps) => {
  currentPagination.value.current = pagination.current || 1;
  currentPagination.value.pageSize = pagination.pageSize || 10;
}

const calcIndex = (index:number) => {
  return (currentPagination.value.current - 1) * currentPagination.value.pageSize + index + 1;
}
const dataSource = ref<object[]>([]);

const modelValue = defineModel<object[]>("value", {
  default: [],
});

// dataSource.value = cloneDeep(dataList);

console.info("dataSource =>", dataSource.value);

const onAddRow = () => {
  modelValue.value.push(cloneDeep(initial));
};

const onDeleteRow = (index: number) => {
  console.info("onDeleteRow =>");
  modelValue.value.splice(index, 1);
};

const { data, loading, run } = useRequest(
  () => {
    console.info("api =>", api);
    if (isFunction(api)) {
      return api(params);
    }
    if (isObject(api)) {
      const network = createNetWork() as any;
      return network.get({ url: api.uri, params });
    }
  },
  {
    manual: true,
  }
);

const getOptions = () => {
  if (options) {
    // optionsData.value = options;
    data.value = options;
    return;
  } else {
    run();
    return;
  }
};

(async () => {
  getOptions();
})();

watch(
  () => params,
  () => {
    getOptions();
    // run();
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
@prefix-cls: ~"@{namespace}-form-table";

.@{prefix-cls} {
  --at-apply: min-w-100px w-full;
  // border: 1px solid red;
  &-index-wrapper {
    // border: 1px solid red;

    height: 24px;
    min-height: 24px;
    --at-apply: flex justify-center items-center;
    &-index {
      // display: none;
    }

    &-delete {
      display: none;
    }

    &:hover {
      // background-color: red;
      .index {
        display: none;
      }
      .delete {
        display: block;
      }
    }
  }
}
</style>
