module.exports = {
  root: true, // 该配置文件为根配置文件
  env: {
    node: true, // 设置环境为 Node.js
  },
  globals: {
    // 全局变量的定义
    $: "readonly", // 设置全局变量 $ 为只读
    $$: "readonly", // 设置全局变量 $$ 为只读
    $ref: "readonly", // 设置全局变量 $ref 为只读
    $shallowRef: "readonly", // 设置全局变量 $shallowRef 为只读
    $computed: "readonly", // 设置全局变量 $computed 为只读
    Fn: "readonly", // 设置全局变量 Fn 为只读
    PromiseFn: "readonly", // 设置全局变量 PromiseFn 为只读
    RefType: "readonly", // 设置全局变量 RefType 为只读
    LabelValueOptions: "readonly", // 设置全局变量 LabelValueOptions 为只读
    EmitType: "readonly", // 设置全局变量 EmitType 为只读
    TargetContext: "readonly", // 设置全局变量 TargetContext 为只读
    ComponentElRef: "readonly", // 设置全局变量 ComponentElRef 为只读
    ComponentRef: "readonly", // 设置全局变量 ComponentRef 为只读
    ElRef: "readonly", // 设置全局变量 ElRef 为只读
    global: "readonly", // 设置全局变量 global 为只读
    ForDataType: "readonly", // 设置全局变量 ForDataType 为只读
    ComponentRoutes: "readonly", // 设置全局变量 ComponentRoutes 为只读
    defineProps: "readonly", // 设置全局变量 defineProps 为只读
    defineEmits: "readonly", // 设置全局变量 defineEmits 为只读
    defineExpose: "readonly", // 设置全局变量 defineExpose 为只读
    withDefaults: "readonly", // 设置全局变量 withDefaults 为只读
  },
  extends: [
    "plugin:vue/vue3-essential", // 使用 Vue 3 的基本配置
    "eslint:recommended", // 使用 ESLint 推荐的配置
    "@vue/typescript/recommended", // 使用 Vue TypeScript 推荐的配置
    "@vue/prettier", // 使用 Vue 官方的 Prettier 配置
    "@vue/eslint-config-typescript", // 使用 Vue TypeScript 配置
  ],
  parser: "vue-eslint-parser", // 设置解析器为 vue-eslint-parser
  parserOptions: {
    parser: "@typescript-eslint/parser", // 设置 TypeScript 解析器为 @typescript-eslint/parser
    ecmaVersion: 2020, // 设置 ECMAScript 版本为 2020
    sourceType: "module", // 设置源代码类型为模块
    jsxPragma: "React", // 设置 JSX 的 pragma 为 React
    ecmaFeatures: {
      jsx: true, // 启用 JSX 语法支持
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"], // 对 TypeScript 和 Vue 文件进行特殊处理
      rules: {
        "no-undef": "off", // 关闭 no-undef 规则，允许使用未定义的变量
      },
    },
    {
      files: ["*.vue"], // 对 Vue 文件进行特殊处理
      parser: "vue-eslint-parser", // 使用 vue-eslint-parser 解析器
      parserOptions: {
        parser: "@typescript-eslint/parser", // 设置 TypeScript 解析器为 @typescript-eslint/parser
        extraFileExtensions: [".vue"], // 额外的文件扩展名
        ecmaVersion: "latest", // 设置 ECMAScript 版本为最新
        ecmaFeatures: {
          jsx: true, // 启用 JSX 语法支持
        },
      },
      rules: {
        "no-undef": "off", // 关闭 no-undef 规则，允许使用未定义的变量
      },
    },
  ],
  rules: {
    "vue/no-v-html": "off", // 关闭 vue/no-v-html 规则，允许使用 v-html 指令
    "vue/require-default-prop": "off", // 关闭 vue/require-default-prop 规则，不要求默认的 prop
    "vue/require-explicit-emits": "off", // 关闭 vue/require-explicit-emits 规则，不要求显式声明 emits
    "vue/multi-word-component-names": "off", // 关闭 vue/multi-word-component-names 规则，允许多个单词的组件名
    "@typescript-eslint/no-explicit-any": "off", // 关闭 @typescript-eslint/no-explicit-any 规则，允许使用 any 类型
    "no-debugger": "off", // 关闭 no-debugger 规则，允许使用 debugger 语句
    "@typescript-eslint/explicit-module-boundary-types": "off", // 关闭 @typescript-eslint/explicit-module-boundary-types 规则，允许 setup() 函数不声明返回类型
    "@typescript-eslint/ban-types": "off", // 关闭 @typescript-eslint/ban-types 规则，允许使用禁止的类型
    "@typescript-eslint/ban-ts-comment": "off", // 关闭 @typescript-eslint/ban-ts-comment 规则，允许使用禁止的注释
    "@typescript-eslint/no-empty-function": "off", // 关闭 @typescript-eslint/no-empty-function 规则，允许空函数
    "@typescript-eslint/no-non-null-assertion": "off", // 关闭 @typescript-eslint/no-non-null-assertion 规则，允许使用非空断言
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ], // 设置 vue/html-self-closing 规则，要求自闭合标签的使用
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_", // 忽略以 _ 开头的参数
        varsIgnorePattern: "^_", // 忽略以 _ 开头的变量
      },
    ], // 设置 @typescript-eslint/no-unused-vars 规则，要求未使用的变量
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_", // 忽略以 _ 开头的参数
        varsIgnorePattern: "^_", // 忽略以 _ 开头的变量
      },
    ], // 设置 no-unused-vars 规则，要求未使用的变量
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", // 使用自动检测换行符的方式
      },
    ], // 设置 prettier/prettier 规则，保持代码格式一致性
  },
};
