<template>
  <h1>Logout...</h1>
</template>

<script>
import { useLogOut } from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { error, logOut } = useLogOut();
    const router = useRouter();
    async function onLogOut() {
      await logOut();
      if (!error.value) router.push({ name: "Login", params: {} });
    }

    onLogOut();

    return {};
  },
};
</script>
