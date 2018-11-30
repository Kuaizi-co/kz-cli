# update

构建环境从 `webpack3` 升级到 `webpack4` 环境，借助于 `vue-cli 3.x` 来运行构建。所以首先确定的的`node`环境中是否已安装了 `vue-cli 3.x`。

```
> vue --version
> vue不是内部命令
> npm install @vue/cli -g
# 或者
> npm update @vue/cli -g
```

已安装了 `vue-cli 3.x` 命令工具后，在所在项目目录中命令窗口，可以愉快的使用 `update` 命令来更新 `vue-cli 3.x` 的 `vue.config.js` 配置文件，并自动安装依赖。

```
# 一键升级到 vue-cli 3.x，webpack4.x
> kz update
```

如果不想安装依赖，则使用参数 `--no-install`

```
> kz update --no-install
```

**启动项目前执行 `yarn lint`**

检测代码符不符合新的`eslint`规则，先修改本地不符合规则的文件

## 关于开发

* Development

```
npm run dev
```

选择启动某个单页，添加`--entry [单页目录名]`

```
# package.json
{
  "scripts": {
    "dev:index": "vue-cli-service serve --copy --entry index"
  }
}
#或者直接执行
$ vue-cli-service serve --copy --entry index
# or
$ npm run dev:index
```

*不能直接使用 `vue-cli-service [entry]`，当中无法使用 `html-webpack-plugin`*
