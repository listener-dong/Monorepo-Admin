import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return /^micro-app/.test(tag);
          },
        },
      },
    }),
    vueJsx({
      // jsx文件 过滤<micro-app>标签的警告
      isCustomElement: (tag) => {
        return /^micro-app/.test(tag);
      },
    }),
  ],
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 5566,
    proxy: {
      "/api": {
        target: "https://msp-test.itqm.cn/msp-api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 移除请求路径中的正则表达式
      },
    },
    headers: {
      // micro-app配置跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
});
