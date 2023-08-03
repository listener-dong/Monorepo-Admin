import packageConfig from "../../../config.json";

const config = JSON.parse(JSON.stringify(packageConfig));

interface DevConfig {
  [key: string]: string;
}

const devConfig: DevConfig = {};

// 将 config 中的配置项合并到 devConfig 中
Object.keys(config).forEach((key) => {
  if (key !== "base") {
    devConfig[key] = `http://localhost:${config[key].port}`;
  }
});

// 线上环境地址
if (process.env.NODE_ENV === "production") {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(devConfig).forEach((key) => {
    devConfig[key] = window.location.origin;
  });
}

export default devConfig;
