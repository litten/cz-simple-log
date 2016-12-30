"format cjs";

var engine = require('./engine');

let conventionalCommitTypes = {
  "types": {
    "feat": {
      "description": "实现了新功能"
    },
    "fix": {
      "description": "修复了bug"
    },
    "docs": {
      "description": "文档更改"
    },
    "style": {
      "description": "不影响代码含义的更改（空白，格式化，缺少分号等）"
    },
    "refactor": {
      "description": "代码重构，不是fix也不是feat"
    },
    "perf": {
      "description": "提高性能的代码更改"
    },
    "test": {
      "description": "添加或修改测试用例"
    },
    "build": {
      "description": "影响构建系统或外部依赖性的更改（npm、package.json、fis3、webpack）"
    },
    "chore": {
      "description": "不涉及src或测试文件的其他更改"
    },
    "revert": {
      "description": "恢复先前的提交"
    }
  }
}

module.exports = engine({
  types: conventionalCommitTypes.types
});
