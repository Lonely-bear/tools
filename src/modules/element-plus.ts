import ElementPlus from "element-plus";
import * as ElIcons from "@element-plus/icons-vue";
import type { App } from "vue";

export function install(app: App) {
  app.use(ElementPlus);
  for (const [key, component] of Object.entries(ElIcons))
    app.component(key, component);
}
