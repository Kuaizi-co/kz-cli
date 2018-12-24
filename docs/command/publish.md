# publish

实现`kz-tasks`基本功能，使用`gulp`替换图片、音频、视频的url版本参数。

兼容旧项目中的`./config/index.js`、`./config/kz-config.js`配置文件。

```
# ./config/index.js
{
  "build": {
    assetsRoot: './dist', // outputDir,
    assetsSubDirectory: 'static', //assetsDir
    assetsPublicPath: '/' // assetsPublicPath
  }
}
```

或

```
{
  dist: './dist', // outputDir
  cdnPath: '/', // assetsDir
  assetsRoot: '', // template
  assetsCDNRoot: // static
}
```


新配置可配置在`vue.config.js`或`package.json`文件，参考如下：

```
# vue.config.js
{
  baseUrl: '', // assetsPublicPath
  outputDir: '',
  assetsDir: ''
}
```

或者

```
# package.json
{
  "kzConfig": {
    outputDir: './dist',
    assetsDir: 'static',
    template: './syncdir/to_user',
    static: './syncdir/to_static',
    assetsPublicPath: '/static'
  }
}
```

## Options

* `outputDir` build编译目录
* `assetsDir` 静态文件在build编译目录的指定子目录，为空直接在build目录
* `template`  同步到线上仓库模板
* `static`    同步到线上CDN地址目录
* `assetsPublicPath` 线上CDN地址
* `replace: [false|true]` 是否要替换版本号
