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

        <!-- <ims-editor></ims-editor> -->
        
        <!-- <ImsOverlayScrollbar  class="w-200px h-300px" always>
          <ims-form-table :pagination="false" bordered  :columns="columns" :lists="dataSource" :dataSource="dataSource" ></ims-form-table>
        </ImsOverlayScrollbar> -->

        <ims-section-title>vtable</ims-section-title>


        <div class="w-full h-400px">
          <ims-vtable :dataSource="records" class="w-full"></ims-vtable>
        </div>

        

        <!-- <div id="tableContainer" ref="vtableRef" style="height:400px;width: 100%;" class="w-full bd-red"></div> -->

        
          
          <!-- <ims-form-table  
          bordered 
          :initial="initial" 
          size="middle" 
          @name-change="onNameChange"
          @deleted="onDeleted"
          @added="onAdded"
          :columns="columns"
        
          v-model:value="dataSource"

          :hab="false"
          
        ></ims-form-table> -->

        <!-- <ImsJsonViewer
          title="dataSource"
          :data="dataSource"
          editable
          showLine
        ></ImsJsonViewer> -->
      </div>
      <!-- <div>
        <ImsSectionTitle title="draggable">draggable</ImsSectionTitle>
        <div class="draggable-wrapper" ref="draggableRef">
          <div class="item border-1 border-red border-solid p-2 mb-2" v-for="n in 6"> {{ n }} </div>
        </div>
      </div> -->
      <!-- <div>
        <ims-json-viewer :data="fileList"></ims-json-viewer>
      </div>
      <ims-uploader 
        v-model:value="fileList"
        action="https://lc.serve.ims.inlin.cloud/tms/v1/files"
        list-type="picture-card"></ims-uploader> -->
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref,h } from "vue";
import type { UploadProps } from 'ant-design-vue';
import type { ImsFormTableColumn } from "@ims-ui/types";

import { ListTable,TYPES,themes } from "@visactor/vtable";

import { Icon } from "@iconify/vue";



const vtableRef = ref();



const records = [
{
      "230517143221027": "CA-2018-156720",
      "230517143221030": "JM-15580",
      "230517143221032": "Bagged Rubber Bands",
      "230517143221023": "Office Supplies",
      "230517143221034": "Fasteners",
      "230517143221037": "West",
      "230517143221024": "Loveland",
      "230517143221029": "2018-12-30",
      "230517143221042": "3",
      "230517143221040": "3.024",
      "230517143221041": "-0.605"
  },
  {
      "230517143221027": "CA-2018-115427",
      "230517143221030": "EB-13975",
      "230517143221032": "GBC Binding covers",
      "230517143221023": "Office Supplies",
      "230517143221034": "Binders",
      "230517143221037": "West",
      "230517143221024": "Fairfield",
      "230517143221029": "2018-12-30",
      "230517143221042": "2",
      "230517143221040": "20.72",
      "230517143221041": "6.475"
  },
  {
      "230517143221027": "CA-2018-115427",
      "230517143221030": "EB-13975",
      "230517143221032": "Cardinal Slant-D Ring Binder, Heavy Gauge Vinyl",
      "230517143221023": "Office Supplies",
      "230517143221034": "Binders",
      "230517143221037": "West",
      "230517143221024": "Fairfield",
      "230517143221029": "2018-12-30",
      "230517143221042": "2",
      "230517143221040": "13.904",
      "230517143221041": "4.519"
  },
  {
      "230517143221027": "CA-2018-143259",
      "230517143221030": "PO-18865",
      "230517143221032": "Wilson Jones Legal Size Ring Binders",
      "230517143221023": "Office Supplies",
      "230517143221034": "Binders",
      "230517143221037": "East",
      "230517143221024": "New York City",
      "230517143221029": "2018-12-30",
      "230517143221042": "3",
      "230517143221040": "52.776",
      "230517143221041": "19.791"
  },
  {
      "230517143221027": "CA-2018-143259",
      "230517143221030": "PO-18865",
      "230517143221032": "Gear Head AU3700S Headset",
      "230517143221023": "Technology",
      "230517143221034": "Phones",
      "230517143221037": "East",
      "230517143221024": "New York City",
      "230517143221029": "2018-12-30",
      "230517143221042": "7",
      "230517143221040": "90.93",
      "230517143221041": "2.728"
  },
  {
      "230517143221027": "CA-2018-143259",
      "230517143221030": "PO-18865",
      "230517143221032": "Bush Westfield Collection Bookcases, Fully Assembled",
      "230517143221023": "Furniture",
      "230517143221034": "Bookcases",
      "230517143221037": "East",
      "230517143221024": "New York City",
      "230517143221029": "2018-12-30",
      "230517143221042": "4",
      "230517143221040": "323.136",
      "230517143221041": "12.118"
  },
  {
      "230517143221027": "CA-2018-126221",
      "230517143221030": "CC-12430",
      "230517143221032": "Eureka The Boss Plus 12-Amp Hard Box Upright Vacuum, Red",
      "230517143221023": "Office Supplies",
      "230517143221034": "Appliances",
      "230517143221037": "Central",
      "230517143221024": "Columbus",
      "230517143221029": "2018-12-30",
      "230517143221042": "2",
      "230517143221040": "209.3",
      "230517143221041": "56.511"
  },
  {
      "230517143221027": "US-2018-158526",
      "230517143221030": "KH-16360",
      "230517143221032": "Harbour Creations Steel Folding Chair",
      "230517143221023": "Furniture",
      "230517143221034": "Chairs",
      "230517143221037": "South",
      "230517143221024": "Louisville",
      "230517143221029": "2018-12-29",
      "230517143221042": "3",
      "230517143221040": "258.75",
      "230517143221041": "77.625"
  },
  {
      "230517143221027": "US-2018-158526",
      "230517143221030": "KH-16360",
      "230517143221032": "Global Leather and Oak Executive Chair, Black",
      "230517143221023": "Furniture",
      "230517143221034": "Chairs",
      "230517143221037": "South",
      "230517143221024": "Louisville",
      "230517143221029": "2018-12-29",
      "230517143221042": "1",
      "230517143221040": "300.98",
      "230517143221041": "87.284"
  },
  {
      "230517143221027": "US-2018-158526",
      "230517143221030": "KH-16360",
      "230517143221032": "Panasonic KP-350BK Electric Pencil Sharpener with Auto Stop",
      "230517143221023": "Office Supplies",
      "230517143221034": "Art",
      "230517143221037": "South",
      "230517143221024": "Louisville",
      "230517143221029": "2018-12-29",
      "230517143221042": "1",
      "230517143221040": "34.58",
      "230517143221041": "10.028"
  },
  {
      "230517143221027": "US-2018-158526",
      "230517143221030": "KH-16360",
      "230517143221032": "GBC ProClick Spines for 32-Hole Punch",
      "230517143221023": "Office Supplies",
      "230517143221034": "Binders",
      "230517143221037": "South",
      "230517143221024": "Louisville",
      "230517143221029": "2018-12-29",
      "230517143221042": "1",
      "230517143221040": "12.53",
      "230517143221041": "5.889"
  },
  {
      "230517143221027": "US-2018-158526",
      "230517143221030": "KH-16360",
      "230517143221032": "DMI Arturo Collection Mission-style Design Wood Chair",
      "230517143221023": "Furniture",
      "230517143221034": "Chairs",
      "230517143221037": "South",
      "230517143221024": "Louisville",
      "230517143221029": "2018-12-29",
      "230517143221042": "8",
      "230517143221040": "1207.84",
      "230517143221041": "314.038"
  },
  {
      "230517143221027": "CA-2018-130631",
      "230517143221030": "BS-11755",
      "230517143221032": "Hand-Finished Solid Wood Document Frame",
      "230517143221023": "Furniture",
      "230517143221034": "Furnishings",
      "230517143221037": "West",
      "230517143221024": "Edmonds",
      "230517143221029": "2018-12-29",
      "230517143221042": "2",
      "230517143221040": "68.46",
      "230517143221041": "20.538"
  },
  {
      "230517143221027": "CA-2018-130631",
      "230517143221030": "BS-11755",
      "230517143221032": "Acco Glide Clips",
      "230517143221023": "Office Supplies",
      "230517143221034": "Fasteners",
      "230517143221037": "West",
      "230517143221024": "Edmonds",
      "230517143221029": "2018-12-29",
      "230517143221042": "5",
      "230517143221040": "19.6",
      "230517143221041": "9.604"
  },
  {
      "230517143221027": "CA-2018-146626",
      "230517143221030": "BP-11185",
      "230517143221032": "Nu-Dell Executive Frame",
      "230517143221023": "Furniture",
      "230517143221034": "Furnishings",
      "230517143221037": "West",
      "230517143221024": "Anaheim",
      "230517143221029": "2018-12-29",
      "230517143221042": "8",
      "230517143221040": "101.12",
      "230517143221041": "37.414"
  },
  {
      "230517143221027": "CA-2018-158673",
      "230517143221030": "KB-16600",
      "230517143221032": "Xerox 1915",
      "230517143221023": "Office Supplies",
      "230517143221034": "Paper",
      "230517143221037": "Central",
      "230517143221024": "Grand Rapids",
      "230517143221029": "2018-12-29",
      "230517143221042": "2",
      "230517143221040": "209.7",
      "230517143221041": "100.656"
  },
  {
      "230517143221027": "US-2018-102638",
      "230517143221030": "MC-17845",
      "230517143221032": "Ideal Clamps",
      "230517143221023": "Office Supplies",
      "230517143221034": "Fasteners",
      "230517143221037": "East",
      "230517143221024": "New York City",
      "230517143221029": "2018-12-29",
      "230517143221042": "3",
      "230517143221040": "6.03",
      "230517143221041": "2.955"
  },
  {
      "230517143221027": "CA-2018-118885",
      "230517143221030": "JG-15160",
      "230517143221032": "Adtran 1202752G1",
      "230517143221023": "Technology",
      "230517143221034": "Phones",
      "230517143221037": "West",
      "230517143221024": "Los Angeles",
      "230517143221029": "2018-12-29",
      "230517143221042": "3",
      "230517143221040": "302.376",
      "230517143221041": "22.678"
  },
  {
      "230517143221027": "CA-2018-118885",
      "230517143221030": "JG-15160",
      "230517143221032": "Global High-Back Leather Tilter, Burgundy",
      "230517143221023": "Furniture",
      "230517143221034": "Chairs",
      "230517143221037": "West",
      "230517143221024": "Los Angeles",
      "230517143221029": "2018-12-29",
      "230517143221042": "4",
      "230517143221040": "393.568",
      "230517143221041": "-44.276"
  }
];



onMounted(()=>{
// 创建 VTable 实例
// const tableInstance = new ListTable(vtableRef.value, option);

// console.info('tableInstance =>',tableInstance);
})


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


const onNameChange = ({value,selectedOptions,index}) => {
  console.info('onNameChange.value =>',value,'selectedOptions =>',selectedOptions,'index =>',index);
}


const onDeleted = (totality:number) => {
  console.info('onDeleted =>',totality);
}
const onAdded = (totality:number) => {
  console.info('onAdded =>',totality);
}

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
    age: false,
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
              field: "titleId",
              events:{
                change:['value','selectedOptions','$event'],
              },
            
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
              name:'AInput',
              props:{
                model:'value',
                placeholder:'请选择类型',
                allowClear:true,
                
              }
            }
          }
         
        ];


</script>

