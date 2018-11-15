module.exports = {
  title: 'kz-cli',
  description: 'Kuaizi FED团队前端开发工作流工具',
  base: '/kz-cli/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '命令', link: '/command/' },
      { text: 'Github', link: 'https://github.com/kuaizi-co/kz-cli' },
    ],
    // sidebar: 'auto'
    sidebar: [
      {
        title: '命令',
        collapsable: false,
        children: [
          ['/command/', '介绍'],
          ['/command/add-command', '添加模块'],
          ['/command/update-command', '更新模块'],
          ['/command/create', 'create'],
          ['/command/imagemin', 'imagemin'],
          ['/command/publish', 'publish'],
          ['/command/update', 'update']
        ]
      },
      {
        title: '外部命令模块',
        collapsable: false,
        children: [
          ['/command/external/template', 'Template'],
          ['/command/external/commit', 'Commit'],
        ]
      }
    ]
  }
}
