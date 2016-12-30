# cz-simple-log

#### 基于cz的commitlog适配器，简洁版

参考[cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)的二次开发

### 安装:

1、 全局安装[cz-cli](https://github.com/commitizen/cz-cli)

```npm install -g commitizen```

2、 安装cz-simple-log

```npm install cz-simple-log```

可以在项目目录，或全局安装，但目标是能引用到它。
请看第3步。

3、 在目录的```package.json```文件里添加配置

```
"config": {
    "commitizen": {
      "path": "./node_modules/cz-simple-log"
    }
}
```

### 使用

用```git cz```命令替换```git commit```命令

### log类型

> feat - 实现了新功能
fix - 修复了bug
docs - 文档更改
style - 不影响代码含义的更改（空白，格式化，缺少分号等）
refactor - 代码重构，不是fix也不是feat
perf - 提高性能的代码更改
test - 添加或修改测试用例
build - 影响构建系统或外部依赖性的更改（npm、package.json、fis3、webpack）
chore - 不涉及src或测试文件的其他更改
revert - 恢复先前的提交
