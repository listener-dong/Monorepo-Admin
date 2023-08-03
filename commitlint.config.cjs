module.exports = {
  ignores: [(commit) => commit.includes("init")], // 忽略包含 "init" 的提交消息
  extends: ["@commitlint/config-conventional"], // 使用 commitlint 的标准配置
  rules: {
    "body-leading-blank": [2, "always"], // 要求正文之前有空行
    "footer-leading-blank": [1, "always"], // 要求尾注之前有空行
    "header-max-length": [2, "always", 108], // 要求标题的最大长度为 108 个字符
    "subject-empty": [2, "never"], // 要求标题不能为空
    "type-empty": [2, "never"], // 要求类型不能为空
    "type-enum": [
      2,
      "always",
      [
        "feat", // 功能（feature）
        "fix", // 修复 bug
        "perf", // 性能优化
        "style", // 样式调整
        "docs", // 文档修改
        "test", // 测试
        "refactor", // 重构
        "build", // 构建
        "ci", // 持续集成（continuous integration）
        "chore", // 杂务（chore）
        "revert", // 撤销
        "wip", // 进行中（work in progress）
        "workflow", // 工作流
        "types", // 类型
        "release", // 发布
      ],
    ],
  },
};
