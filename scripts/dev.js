import inquirer from "inquirer";
import { execa } from "execa";
import projects from "./../config.json" assert { type: "json" };
import detect from "detect-port";

// 存储已占用端口的数组
const occupiedList = [];

// 检查端口是否被占用
async function checkPort(key) {
  const { port } = projects[key];
  const detectedPort = await detect(port);
  return {
    package: key,
    isOccupied: detectedPort !== port,
  };
}

// 捕获SIGINT信号
process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Terminating all applications...');
  // 终止所有的应用
  process.exit(0);
});

// 存储用户选择的应用
let selected = [];

// 启动子应用
async function runProject(project) {
  try {
    console.log(`\nStarting ${project.name}...\n`);
    const { stdout } = await execa('pnpm', ['run', project.script], {
      cwd: project.path,
      stdio: 'inherit',
    });
    console.log(stdout);
  } catch (error) {
    for (const item of selected) {
      if (item.process && !item.process.killed) {
        item.process.kill();
      }
    }
  }
}

async function main() {
  // 检查端口占用情况并保存到occupiedList数组
  const checkPorts = Object.keys(projects).map(checkPort);
  occupiedList.push(...(await Promise.all(checkPorts)));

  // 获取用户选择的子应用
  const { selectedProjects } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'selectedProjects',
      message: '请选择要启动的子应用:',
      choices: Object.keys(projects).map((key) => {
        const { name, packageName, port } = projects[key];
        return {
          checked: key == "base", // 判断是否为基础应用，默认选中
          name: `${name}(${packageName}:${port})`, // 显示应用名称和端口号
          value: projects[key],
          disabled: occupiedList.find((item) => item.package === key).isOccupied // 判断是否已启动，禁用选项
            ? "已启动"
            : false,
        };
      }),
    },
  ]);

  selected = selectedProjects;

  if (selectedProjects.length === 0) {
    console.log('No projects selected.');
    return;
  }

  console.log(`\nSelected projects: ${selectedProjects.map((project) => project.name).join(', ')}\n`);

  // 逐个启动选择的子应用
  for (const project of selectedProjects) {
    runProject(project);
  }
}

main();
