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
    <div>
      <!-- <ImsJsonViewer :data="datas"></ImsJsonViewer> -->
      <div>{{ val }}</div>
    </div>
    <p>button - demo {{ msg }} {{ testParms }}</p>

    <ims-select
      :api="getNodes"
      :params="testParms"
      class="mb-2"
      :fieldNames="fieldNames"
    ></ims-select>
    <ImsButton @click="changeTest">默认插槽内容</ImsButton>
    <ImsButton :text="msg">123</ImsButton>

    <ImsPopconfirmButton text="aaa" :canConfirm="false"></ImsPopconfirmButton>
    <!-- :optionsApi="getNodes({ is_show_tree: '1' })" -->
    <ImsCascader
      v-model:value="val"
      :fieldNames="fieldNames"
      :params="cascaderParms"
      :api="getNodes"
    ></ImsCascader>

    <p @click="changeText">修改1122</p>
    <p class="border-2 border-solid border-light-200">input demo xxx</p>

    <!-- <ims-table :dataSource="dataSource" :columns="columns" sortable></ims-table> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getNodes } from "@ims-ui/apis";
const msg = ref("abc");

const val = ref(["zhejiang", "hangzhou", "xihu"]);

const fieldNames = { label: "name", value: "id" };

const testParms = ref<any>({
  a: "bbc",
  is_show_tree: 1,
});

const cascaderParms = ref<any>({
  a: "bbc",
  is_show_tree: 1,
});

const changeTest = () => {
  testParms.value = {
    a: "1234",
    status: 1,
    pageSize: Math.floor(Math.random() * 10),
    b: Math.random() + "a",
  };

  cascaderParms.value = {
    status: 1,
    pageSize: Math.floor(Math.random() * 10),
    is_show_tree: 1,
  };
  // api.value = getNodes(testParms.value);
  // console.info("api.value =>", api);
  // let res = getNodes(testParms.value);
  // console.info("res =>", res);
  console.info("change test");
};

const testOptions = [
  {
    id: 592,
    pid: 0,
    name: "系统",
    inferiors_count: 3,
    route: null,
  },
  {
    id: 564,
    pid: 563,
    name: "增加",
    inferiors_count: 0,
    route: null,
  },
  {
    id: 606,
    pid: 0,
    name: "运维",
    inferiors_count: 2,
    route: null,
  },
  {
    id: 126,
    pid: 0,
    name: "控制台",
    inferiors_count: 2,
    route: null,
  },
];

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "3",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "4",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
  {
    key: "5",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "6",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

const datas = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const changeText = () => {
  msg.value = "式123";

  console.info("af changeText msg=>", msg.value);
};
</script>
