import { createApp } from 'vue'
import App from './App.vue'
import * as Modules from './modules'

import 'element-plus/dist/index.css'
import './assets/base.css'

const app = createApp(App)

// 注册模块
app.use(Modules.elementInstall)

app.mount('#app')
