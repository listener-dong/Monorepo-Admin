<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="updateMessage">Update Message</button>
    <p>
      <img :src="imgUrl" alt="" />
    </p>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import APi from "@msp/api";

export default {
  setup() {
    const message = ref("Child_Three");
    const imgUrl = ref("");

    const updateMessage = () => {
      message.value = "Updated Message";
    };

    onMounted(() => {
      getCaptcha();
    });

    const getCaptcha = async () => {
      const { code, data } = await APi.getCaptcha();
      code == 200 && (imgUrl.value = data.base64);
    };

    return {
      imgUrl,
      message,
      updateMessage,
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
