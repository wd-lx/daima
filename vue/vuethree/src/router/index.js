import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from '@/components/page'
import work from '@/components/work'
import first from '@/components/first'
import dtalist from '@/components/datalist'
import sort from '@/components/sort'
const User = {
    template: `<div>
  <h3><font color="green">我是父组件 {{$route.params.id}} </font></h3>
  <router-view/>
  </div>`
}
const Profile = {
    template: `<div><h3><font color="red">我是Profile子组件 </font></h3></div>`
}
const Posts = {
    template: `<div><h3><font color="green">我是posts组件 </font></h3></div>`
}
const NotFount = {
    template: `<div><h3>  404您访问的页面不存在 </h3></div>`
}
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/page'
                // name: 'HelloWorld',
                // component: HelloWorld
        },
        {
            path: '/page',
            name: "page",
            component: page
        },
        {
            path: '/work',
            name: "work",
            component: work
        },
        {
            path: '/sort',
            name: "sort",
            component: sort
        },
        {
            path: '/first/:id',
            name: "first",
            component: first
        },
        {
            path: '/user/:id',
            name: "User",
            component: User,
            children: [{
                    path: 'profile',
                    name: "Profile",
                    component: Profile,
                },
                {
                    path: '/posts',
                    name: "Posts",
                    component: Posts,
                }
            ]
        },
        {
            path: '/datalist',
            name: '/datalist',
            component: dtalist
        }
        // 路由的重定向：表示将你原来在转发列表中发向路由的路径改成另一条路由的路径，
        // 你的数据会存到另一路由的服务器上
        // {
        //     path: "*",
        //     // component: NotFount,
        //     redirect: (to) => {
        //         console.log(to);
        //         if (to.path === "/aaa") {
        //             return "/page"
        //         } else if (to.path === "/bbb") {
        //             return "/work"
        //         } else {
        //             return '/'
        //         }
        //     }
        // }
    ]
})