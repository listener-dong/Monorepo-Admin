1. 因基座配置TypeScript，所以子应用必须是TypeScript项目，否则会出现插件引入失败的问题。
2. 打包完以后环境需要配置跨域；
   主应用与子应用都需要配置跨域，与开发环境配置相似
   ```js
   // 本地打包配置的模拟环境
  const express = require('express');
  const cors = require('cors');

  const app = express();
  const port = 5566;

  // 设置允许跨域请求
  app.use(cors());

  // 配置静态文件目录
  app.use(express.static('./'));

  // 启动服务器
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
   ```