# kz-cli-template

```
template 模块
```

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
