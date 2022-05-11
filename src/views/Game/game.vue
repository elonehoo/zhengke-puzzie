<template>
  <div>
    <Game :init-data="initData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Game from "@/component/Game";

const initData = ref({
  x: 4,
  y: 3,
  imgUrl: ["./src/assets/images/2.jpg"],
});
</script>

<style scoped></style>
