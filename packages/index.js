import button from './button'
import EchojoyTest from './test'
import SelectSearch from './selectSearch'
// 存储组件列表
const components = [
    button, EchojoyTest, SelectSearch
]
/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const install = (Vue) => {
    // 判断是否安装
    if (install.installed) {
        return
    }
    install.installed = true
    // 遍历所有组件
    components.map(item => {
        Vue.component(item.name, item)
    })
}

//判断Vue初始化
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    ...components
}