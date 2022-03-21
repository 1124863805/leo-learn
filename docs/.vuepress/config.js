module.exports = {
    theme: 'reco',
    title: '李耀的笔记',
    base: '/leo-learn/',
    description: 'Just playing around',

    themeConfig: {
        subSidebar: 'auto',
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "Redis",
                collapsable: true, // 不折叠
                children: [
                    { title: "Redis安装", path: "/redis/Redis安装说明" }
                ],
            },
            {
                title: "JAVA",
                collapsable: true, // 不折叠
                children: [
                    {
                        title: "登录",
                        collapsable: true, // 不折叠
                        // children:[
                        //     { title: "基于Session方案实现登录", path: "/java/基于Session方案实现登录" }
                        // ]
                    }
                ],
            }

        ]

    }
}