# kz imagemin

```
kz imagemin [-s, --src] [image folder]
```

## optins

* `-s, --src` 可选，压缩指定目录图片

支持 `GIF`、`JPG`、`png`、`svg`文件的压缩，详细请参考 [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)

图片压缩建议在 `git commit` 之前手动操作，`imagemin` 默认的图片路径是`./public`、`./src/assets/img` 及 `./static` 目录，遵从 `kz-preset` 项目目录结构。

可以自定义目录下, *注意目录有没有node_modules，请不要乱试*

```
> cd myproject
> kz imagemin ./
```

执行后

```
λ kz imagemin
- Imagemin Start:[13:47:13] gulp-imagemin: Minified 0 images
/ Imagemin Start:[13:47:14] gulp-imagemin: Minified 2 images (saved 7.18 kB - 5.8%)
[13:47:14] gulp-imagemin: Minified 0 images
😎 Succeed!
```
