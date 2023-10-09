<template>
  <div  :class="`${prefixCls}-wrapper`" ref="vtableWrapperRef" >
    width:{{ width }}
    height:{{ height }}
    <!-- <ImsJsonViewer :data="dataSource"></ImsJsonViewer> -->
    <div ref="vtableRef" v-element-size="onVtableRefResize"  :class="prefixCls"></div>
  </div>
</template>
<script lang="ts" setup>
import { useStyle } from "@ims-ui/hooks";
import { ListTable,TYPES,themes } from "@visactor/vtable";

import { useElementSize } from '@vueuse/core';

import { vElementSize } from '@vueuse/components';

import { ImsVtableProps } from "@ims-ui/types";
import ImsJsonViewer from "@ims-ui/components/json-viewer";

const COMPONENT_NAME = "ImsVtable";
defineOptions({
  name: COMPONENT_NAME,
});



const { prefixCls } = useStyle("v-table");

const vtableRef = ref();

const vtableInstance = ref();

const vtableWrapperRef = ref(null);

const { width, height } = useElementSize(vtableWrapperRef);

const onVtableRefResize = ({ width, height }: { width: number; height: number }) => {
  console.info('onVtableRefResize => width',width);
  console.info('onVtableRefResize => height',height);

  // console.info('vtableInstance =>',vtableInstance.value);

  // vtableInstance.value.widthMode = 'autoWidth';

  // vtableInstance.value.renderWithRecreateCells();
}


const { api, options, params,dataSource } = defineProps<ImsVtableProps>();

console.info('dataSource =>',dataSource);

const vColumns = [
    {
        "field": "230517143221027",
        "title": "Order ID",
        "width": "auto",
        
    },
    {
        "field": "230517143221030",
        "title": "Customer ID",
        "width": "auto"
    },
    {
        "field": "230517143221032",
        "title": "产品名称",
        "width": "auto",
        "headerStyle":{
          "textAlign":"center",
          "color":"red"
        },
        // "style":{
        //   "textAlign":"center"
        // },
        
    },
    {
        "field": "230517143221023",
        "title": "Category",
        "width": "auto"
    },
    {
        "field": "230517143221034",
        "title": "Sub-Category",
        "width": "auto"
    },
    {
        "field": "230517143221037",
        "title": "Region",
        "width": "auto"
    },
    {
        "field": "230517143221024",
        "title": "City",
        "width": "auto"
    },
    {
        "field": "230517143221029",
        "title": "Order Date",
        "width": "auto"
    },
    {
        "field": "230517143221042",
        "title": "Quantity",
        "width": "auto"
    },
    {
        "field": "230517143221040",
        "title": "Sales",
        "width": "auto"
    },
    {
        "field": "230517143221041",
        "title": "Profit",
        "width": "auto"
    }
];




const option = {
  records:dataSource,
  columns:vColumns,
  
  allowFrozenColCount: 1,
  frozenColCount: 1,
  showFrozenIcon: false,
  rightFrozenColCount:2,
  // autoWidth adaptive
  widthMode: 'adaptive',
  // autoFillWidth:true,
  // dragHeaderMode:'columns',
  dragHeaderMode:'column',
  title:{
    textStyle:{
      textAlign:"center"
    }
  },
  // theme:themes.ARCO,
  // theme: {
  //     scrollStyle: {
  //         visible:'always',
          
  //       }
  // }
};


(async function initialization() {
  console.info('initialization =>');
  console.info('initialization.vtableRef =>',vtableRef.value);
})();

onMounted(()=>{
  console.info('onMounted =>');
  

  vtableInstance.value = new ListTable(vtableRef.value, option);
});

</script>

<style lang="less" scoped>
@prefix-cls: ~"@{namespace}-v-table";

.@{prefix-cls}-wrapper {
  --at-apply: w-full;
}

.@{prefix-cls} {
  --at-apply: w-full bd-red h-full;
}

</style>
