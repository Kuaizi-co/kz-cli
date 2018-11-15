---
title: Guide
sidebar: auto
---

# kz-cli Guide

```
kz cli 命令工具
```

## 使用

```

# 安装或更新

> npm i @kuaizi/kz-cli -g

# 查看帮助

> kz --help

# kz命令当前版本

> kz -V

# 增加一个支持外部命令模块

> kz add-command @kuaizi/kz-cli-commit

# 使用新commit模块

> kz commit

# 更新所有外部模块版本

> kz update-command

```

## 开发

### 内部增加模块

在 `packages` 目录增加 `<command>`目录，可实现热插即用

### 外部安装命令模块

遵从以 `kz-cli-<command>` 发布的 `npm` 包，通过 `npm install kz-cli-<command>` 安装到本地，程序默认加载 `package.json` 中 `dependencies` 字段包含`kz-cli-`开头的包。

### 调试

在项目中执行 `npm link`

```
$ cd path/to/kz-cli
$ npm link
```

执行后去测试目录执行

```
cd path/to/test-kz-cli
kz create
```

项目内部安装

```
cd path/to/test-kz-cli
npm link @kuaizi/kz-cli
```

## release 发布

关于发布，当前以`dev`为默认分支，在`dev`分支做日常开发和测试。谨记包的发布需切换`master`分支。

先切换到`master`分支，再合并`dev`分支，执行`npm run release` 发版后，再以`master`作为基点版本。

```
> git branch
$ * dev
> git add .
> git commit -m "feature:xxx"
> git checkout master
> git merge dev
> npm run release
> git checkout dev
> git rebase master
> git push origin dev
```
