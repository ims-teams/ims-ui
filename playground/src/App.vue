<template>
  <div
    style="
      text-align: center;
      padding: 16px;
      color: red;
      font-size: 18px;
      font-weight: bold;
    "
  >
    测试场地
  </div>
  <hr />
  <div>
    <div class="my-2 p-2 border-1 border-solid border-red-300">
      <div class="  mb-2">
        
        <!-- <ImsOverlayScrollbar  class="w-200px h-300px" always>
          <ims-form-table :pagination="false" bordered  :columns="columns" :lists="dataSource" :dataSource="dataSource" ></ims-form-table>
        </ImsOverlayScrollbar> -->

        <ims-form-table  bordered :initial="initial" size="middle" :columns="columns" v-model:value="dataSource"  ></ims-form-table>

        <ImsJsonViewer
          title="dataSource"
          :data="dataSource"
          editable
          showLine
        ></ImsJsonViewer>
      </div>
      <!-- <div>
        <ImsSectionTitle title="draggable">draggable</ImsSectionTitle>
        <div class="draggable-wrapper" ref="draggableRef">
          <div class="item border-1 border-red border-solid p-2 mb-2" v-for="n in 6"> {{ n }} </div>
        </div>
      </div> -->
      <div>
        <ims-json-viewer :data="fileList"></ims-json-viewer>
      </div>
      <ims-uploader 
        v-model:value="fileList"
        action="https://lc.serve.ims.inlin.cloud/tms/v1/files"
        list-type="picture-card"></ims-uploader>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref,h } from "vue";
import type { UploadProps } from 'ant-design-vue';
import type { ImsFormTableColumn } from "@ims-ui/types";

// import {Sortable} from '@shopify/draggable';

// const draggableRef = ref();


// const sortable = ref();

// onMounted(()=>{
//   sortable.value = new Sortable(draggableRef.value, {
//   draggable: '.item',
// });

//   sortable.value.on('sortable:start', () => console.log('sortable:start'));
//   sortable.value.on('sortable:sort', () => console.log('sortable:sort'));
//   sortable.value.on('sortable:sorted', () => console.log('sortable:sorted'));
//   sortable.value.on('sortable:stop', () => console.log('sortable:stop'));

// });




 
const fileList = ref<UploadProps['fileList']>([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }
  
]);



const dataSource = ref<object[]>([]);

const initial = {
    id: "",
    name: "",
    age: 0,
    address: '',
    status:true,
  };

const columns:ImsFormTableColumn[] = [
          // {
          //   title: '序号',
          //   dataIndex: 'index',
          //   key: 'index',
          //   align:'center',
          //   width:80,
          //   component:{
          //     name:'',
          //   },
          // },
          {
            title: '列头',
            dataIndex: 'name',
            key: 'name',
            align:'center',
            component:{
              name:'ASelect',
              
              props:{
                placeholder:'请选择列头',
                allowClear:true,
                model:'value',
                // style:{
                //   width:'120px',
                // },
                showSearch:true,
                options:[
                  {
                    value: '1',
                    label: 'Jack',
                  },
                  {
                    value: '2',
                    label: '3333',
                  },
                ]
              }
            }
          },
          // 
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            align:'center',
            component:{
              name:'ASwitch',
              model:'checked',
              props:{
                step:10,
                model:'checked',
                placeholder:'输入年龄',
              }
            }
          },
          {
            title: '显示',
            dataIndex: 'age',
            key: 'age',
            align:'center',
            component:{
              name:'ACheckbox',
              model:'checked',
              props:{
                step:10,
                model:'checked',
                placeholder:'输入年龄',
              }
            }
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            align:'center',
            component:{
              name:'ASelect',
              props:{
                model:'value',
                placeholder:'请选择类型',
                allowClear:true,
                options:[
                {
    value: 'jack',
    label: 'Jack',
  },
  {
    value: 'lucy',
    label: 'Lucy',
  },
  {
    value: 'disabled',
    label: 'Disabled',
    disabled: true,
  },
                ]
              }
            }
          }
         
        ];


</script>

