<script setup lang="ts">
import { onMounted, ref } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";
import Api from "@msp/api";
console.log(111, Api.getCaptcha);
onMounted(() => {
  getCaptcha();
});

const imgUrl = ref("");

const getCaptcha = async () => {
  const { code, data } = await Api.getCaptcha();
  code == 200 && (imgUrl.value = data.base64);
};
</script>

<template>
  <h1>基座</h1>
  <img :src="imgUrl" alt="" />
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <router-view />
  <micro-app name="child_three" url="http://localhost:6003/" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
