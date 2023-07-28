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
      <ImsJsonPretty :data="datas"></ImsJsonPretty>
      <div>{{ val }}</div>
    </div>
    <p>button - demo {{ msg }}</p>
    <ImsButton>默认插槽内容</ImsButton>
    <ImsButton :text="msg">123</ImsButton>

    <ImsPopconfirmButton text="aaa" :canConfirm="false"></ImsPopconfirmButton>

    <ImsCascader v-model:value="val" :options="datas"></ImsCascader>

    <p @click="changeText">修改1122</p>
    <p class="border-2 border-solid border-light-200">input demo xxx</p>

    <ims-table :dataSource="dataSource" :columns="columns"></ims-table>
  </div>
</template>

<script setup lang="ts">
import { ImsJsonPretty } from "ims-ui";

import { ref } from "vue";

const msg = ref("abc");

const val = ref(["zhejiang", "hangzhou", "xihu"]);

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
