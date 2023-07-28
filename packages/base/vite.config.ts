import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>{            
            return  /^micro-app/.test(tag)
          }
        }
      }
    }),
    vueJsx(
      {
        // jsx文件 过滤<micro-app>标签的警告
        isCustomElement: (tag) =>{
          return  /^micro-app/.test(tag)
        }
      }
    ),
  ],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
