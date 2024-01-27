<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";
export default {
  setup() {
    const route = useRoute();
    return {
      layout: computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"),
    };
  },
};
</script>
