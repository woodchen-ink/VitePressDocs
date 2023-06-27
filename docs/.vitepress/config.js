
  export default {
    title: 'CZLChat 文档',// 网站标题
    description: 'CZLChat的使用文档。CZLChat是基于开源神经网络训练模型，预训练+监督训练的对话机器人，可以帮助您处理工作、学习和生活的问题。', //网站描述
    ignoreDeadLinks: true,// 最好加上，构建时会忽略md中的外链
    markdown: {
      // theme: 'material-palenight',//md主题
      lineNumbers: true//md 加行号
    },
    lastUpdated: true,//显示最近更新时间
    appearance: true,//可以选择深浅主题
    
    // 主题配置
    themeConfig: {
      socialLinks: [//右上角图标和链接，icon 可用svg 配置
        { icon: 'github', link: 'https://github.com/woodchen-ink/CZLChatDocs' }
      ],
      lastUpdatedText: '更新时间',
      siteTitle: 'CZLChat 文档',
      nav: [//右侧导航
        { text: '首页', link: '/' },
        { text: 'CZLChat', link: 'https://chat.czl.net' }
      ],
      // 侧边导航
      sidebar: [
        {
          text: '项目简介',
          items: [
            { text: '为什么要写这个项目', link: '/page/why' },
            { text: '多入口打包', link: '/page/pages' },
            { text: '自动化生成项目基本模版', link: '/page/init' },
            { text: 'Pinia',link:'/page/pinia'},
            { text: '数据持久化',link:'/page/piniaPlugin'},
            { text: 'axios二次封装',link:'/page/axios'},
            { text: '路由跳转动画',link:'/page/router'},
            { text: 'less sass的优化处理',link:'/page/less'},
            { text: 'viewport适配方案',link:'/page/viewport'},
            { text: '环境变量',link:'/page/env'},
            { text: '兼容性处理方案',link:'/page/babel'},
            { text: '总结', link: '/page/all' },
          ]
        },
        {
          text: '项目简介',
          items: [
            { text: '为什么要写这个项目', link: '/page/why' },
            { text: '多入口打包', link: '/page/pages' },
            { text: '自动化生成项目基本模版', link: '/page/init' },
            { text: 'Pinia',link:'/page/pinia'},
            { text: '数据持久化',link:'/page/piniaPlugin'},
            { text: 'axios二次封装',link:'/page/axios'},
            { text: '路由跳转动画',link:'/page/router'},
            { text: 'less sass的优化处理',link:'/page/less'},
            { text: 'viewport适配方案',link:'/page/viewport'},
            { text: '环境变量',link:'/page/env'},
            { text: '兼容性处理方案',link:'/page/babel'},
            { text: '总结', link: '/page/all' },
          ]
        }
      ],
      outlineTitle: '目录'
    }
  }
  