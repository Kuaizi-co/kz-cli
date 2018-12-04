# kz-cli-template

集成 `kz-template` npm命令功能，用于下载 `vue cli 2.x` 手脚架模板，新的统一使用 `kz create` 同步 `vue-cli`

```
> kz template <appName> [options]
```

* `appName` 项目目录名称
* `options` 配置
  * `-u,--url` 项目仓库地址，默认为 `vue-boilerplate`。支持github的项目缩写，比如`kuaizi-co/vue-cli` 内部 `gitlab` 填写完整地址 `https://gitlab.local/f2e/xxx.git`
  * `-b,--branch` 需要使用仓库的分支
  * `-c,--clone` 使用`git clone` 还是 `http`直接下载，内部gitlab由于没有做 `archive` 归档,因此默认使用`clone:true`
  * `--direct` 使用 `http` 方式下载，速度更快，内部 `gitlab` 不建议使用该参数

## release

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
