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
    <ImsCascader></ImsCascader>
    <!-- <div
      id="test-leafer"
      class="border-1 border-solid border-red-500 w-full h-300px"
    ></div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Leafer, Rect } from "leafer-ui";
import { getNodes } from "@ims-ui/apis";

import { ImsCascader } from "ims-ui";

const msg = ref("abc");

console.info("import.meta.env =>", import.meta.env);

const val = ref(["zhejiang", "hangzhou", "xihu"]);

const fieldNames = { label: "name", value: "id" };

const leafer = ref();

nextTick(() => {
  // leafer.value = new Leafer({
  //   view: "test-leafer", // 支持 window 、div、canvas 标签对象， 可使用id字符串(不用加 # 号)
  //   // width: 600,
  //   // height: 600,
  // });
  // const rect = new Rect({
  //   x: 100,
  //   y: 100,
  //   width: 200,
  //   height: 200,
  //   draggable: true,
  //   fill: "#32cd79", // 背景色
  // });
  // leafer.value.add(rect);
});

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
