import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "Auth-layout",
    defineAsyncComponent(() => import("@/layouts/Auth"))
  );
  app.component(
    "Default-layout",
    defineAsyncComponent(() => import("@/layouts/Default"))
  );
}
