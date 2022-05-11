<template>
  <div>
    main
    <button @click="go">click</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const go = () => {
  router.push("/game");
};
</script>

<style scoped></style>
