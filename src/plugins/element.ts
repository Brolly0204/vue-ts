import { App } from 'vue'
import {
  ElMessage 
} from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default (app: App): void => {
  // 按需导入组件列表
  const components = [
    ElMessage
  ]

  components.forEach(component => {
    app.use(component)
  })
  app.config.globalProperties.$message = ElMessage
}
