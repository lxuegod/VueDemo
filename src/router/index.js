// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/AboutDemo'
import Home from '../pages/HomeDemo'
import News from '../pages/NewsDemo'
import Message from '../pages/MessageDemo'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News,
				},
				{
					path:'message',
					component:Message,
				}
			]
		}
	]
})
