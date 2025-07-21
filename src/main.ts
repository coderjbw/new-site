import { createApp } from 'vue';
import App from './App.vue';
// 引入路由
import router from './router/index';
import 'normalize.css';
import 'amfe-flexible';

// 引入vant组件
import { Button, Image as VanImage, Uploader, Field, CellGroup, NavBar, Picker, Popup } from "vant";

const app = createApp(App);

app.use(router);

app.use(Button);
app.use(VanImage);
app.use(Uploader);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);
app.use(Picker);
app.use(Popup);

app.mount('#app');
