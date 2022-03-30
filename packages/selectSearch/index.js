// 导入组件，组件必须声明 name
import SelectSearch from './src/select.vue'

// 为组件提供 install 安装方法，供按需引入
SelectSearch.install = (Vue) => {
    Vue.component(SelectSearch.name, SelectSearch)
}

// 默认导出组件
export default SelectSearch
