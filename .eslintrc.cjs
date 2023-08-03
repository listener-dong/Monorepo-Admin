module.exports = {
  env: {
    // 指定代码运行环境为 Node.js
    node: true,
  },
  globals: {
    // 声明 `projects` 是一个只读的全局变量
    projects: "readonly",
  },
  plugins: ["node"], // 启用名为 "node" 的插件
  extends: [
    // 使用 Vue.js 3.x 版本的基本规则
    "plugin:vue/vue3-essential",
    // 使用 ESLint 推荐的规则集
    "eslint:recommended",
    // 使用 Vue.js 官方的 TypeScript 配置规则
    "@vue/typescript/recommended",
    // 集成了 Prettier 的规则，用于代码格式化
    "@vue/prettier",
    // 使用 Vue.js 官方的 ESLint TypeScript 配置规则
    "@vue/eslint-config-typescript",
  ],
  rules: {
    // 允许在代码中使用 `console`
    "no-console": "off",
    // 允许导入外部依赖
    "import/no-extraneous-dependencies": "off",
    // 允许修改函数参数的值
    "no-param-reassign": "off",
    // 允许使用 `any` 类型
    "@typescript-eslint/no-explicit-any": "off",
    // 允许使用多个单词来命名 Vue 组件
    "vue/multi-word-component-names": "off",
    // 允许使用受限制的语法结构
    "no-restricted-syntax": "off",
    // 在 JSX 中允许使用 React 组件而无需导入
    "react/react-in-jsx-scope": "off",
    // 使用相等比较运算符 "=="
    "no-undef": ["error", { typeof: false }],
  },
};
