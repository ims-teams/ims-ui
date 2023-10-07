# RowList

row list data input like table

# When To Use

- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classification separated for easy selection.
- Chooses cascade items in one float layer for better user experience.

# 示例

<script setup>
import { ref } from 'vue';
import { ImsFormTable,ImsJsonViewer } from "ims-ui";

console.info('ImsFormTable =>',ImsFormTable);


const count = ref(0);

const dataSource = ref([]);

const initial = {
    id: "",
    name: "",
    age: false,
    address: '',
    status:true,
  };

const columns = [
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

const onAdded = (totality) => {
  console.info('onAdded => totality',totality);
}

const onDeleted = (totality) => {
  console.info('onDeleted => totality',totality);
}



</script>

<ImsFormTable :initial="initial" :columns="columns"></ImsFormTable>

<!-- <ims-form-table

:initial="initial"
size="middle"

@deleted="onDeleted"
@added="onAdded"
:columns="columns"
v-model:value="dataSource"

:hab="false"

> </ims-form-table> -->

<span @click="count++">test</span>

```php
<?php

phpinfo();

?>

```

# API

## 参数

| Property      |  Description  |    Type | Default | Version |
| ------------- | :-----------: | ------: | ------: | ------- |
| col 3 is      | right-aligned | boolean |    true | 1       |
| col 2 is      |   centered    |     $12 |         |         |
| zebra stripes |   are neat    |      $1 |         |         |

sdfsd

## 事件

| 名称    |  说明  |        回调参数 | Version |
| ------- | :----: | --------------: | ------- |
| added   | 增加行 | totality:number | 1       |
| deleted | 删除行 | totality:number | 1       |

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
