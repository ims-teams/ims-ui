import { createApp } from "vue";
import App from "./App.vue";
import "vue-json-pretty/lib/styles.css";

import Antd from "ant-design-vue";

// ims-ui 样式使用了 unocss 所有这里可以不引入
import "virtual:uno.css";

import ImsUI from "ims-ui";

createApp(App).use(Antd).use(ImsUI).mount("#app");
