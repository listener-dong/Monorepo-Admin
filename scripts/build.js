import inquirer from "inquirer";
import { execa } from "execa";
import config from "./../config.json" assert { type: "json" };
import fs from "fs/promises";
import path from "path";

async function buildPackages() {
  // 提示用户选择要打包的应用
  const answers = await inquirer.prompt([
    {
      name: "buildPackage",
      type: "checkbox",
      message: "请选择要打包的应用",
      choices: Object.keys(config).map((key) => {
        const { name, packageName } = config[key];
        return {
          name: `${name}(${packageName})`,
          value: key,
        };
      }),
    },
  ]);

  console.time("打包完成，耗时");

  // 创建存放打包结果的根目录
  await fs.mkdir(path.resolve("dist"), { recursive: true });

  // 并行打包选中的应用
  await Promise.all(
    answers.buildPackage.map(async (item) => {
      const outputPath = item === "base" ? "dist/base" : `dist/child/${item}`;

      // 创建应用的目录
      await fs.mkdir(path.resolve(outputPath), { recursive: true });

      await execa("npm", ["run", "build"], {
        cwd: `./packages/${item}`,
        stdio: "inherit",
      });

      // 移动打包结果到目标位置
      const sourcePath = path.resolve(`./packages/${item}/dist`);
      const files = await fs.readdir(sourcePath);
      await Promise.all(
        files.map(async (file) => {
          const sourceFilePath = path.resolve(sourcePath, file);
          const targetFilePath = path.resolve(outputPath, file);
          await fs.rename(sourceFilePath, targetFilePath);
          // 移除各个项目中的dist文件
          await fs.rm(`./packages/${item}/dist`, { recursive: true, force: true });
        })
      );
    })
  );

  console.timeEnd("打包完成，耗时");
}

async function main() {
  try {
    await buildPackages();
  } catch (error) {
    console.error("打包过程出现错误:", error);
  }
}

main();
