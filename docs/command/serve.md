# serve

```
vue-cli-service serve 别名
```

执行`vue-cli-service serve`

* `kz serve [page]`
  * `--page` 查看项目的多页目录，获取 `vue.config.js` 的 `pages` 配置
  * `-r,--router <route>` 只允许访问指定一级路由，减少`building module`消耗时间

## 用法

```
$ kz serve --page
# output
🌻Project pages:

  * index
  * login

👉  Get started with the following commands:

    kz serve [page]
```

可以直观看到项目的每个单页（`SPA`）的入口，只对某个入口做开发

```
$ kz serve login
# output
✨Start vue-cli-service:
 INFO  Starting development server...
 98% after emitting SizeLimitsPlugin DONE  Compiled successfully in 25074ms15:33:

  App running at:
  - Local:   http://localhost:4042/ (copied to clipboard)
  - Network: http://192.168.198.71:4042/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

## 指定路由

```
$ kz serve --route manage
```

指定启动本地server只访问 `/manage` 下所有的路由页面

还有一种的通过 `vue cli 3` 的环境变量文件， 在你项目的根目录下新建一个 `.env.local`，添加变量 `VUE_APP_ALLOW_ROUTE`，*要以 `VUE_APP_` 开头，否则获取不了，神了！！！*

```
# .env.local
VUE_APP_ALLOW_ROUTE=manage,report
```
