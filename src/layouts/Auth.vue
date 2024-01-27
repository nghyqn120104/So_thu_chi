<template>
  <navigation-brand />
  <slot></slot>
</template>

<script>
import NavigationBrand from "@/components/NavigationBrand.vue";
export default {
  components: {
    NavigationBrand,
  },
};
</script>
