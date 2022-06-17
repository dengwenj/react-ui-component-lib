import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
// import './styles/index.scss'
/**
 * 重要 别忘记样式
 */
import 'antd/dist/antd.css';
import '@ant-design/pro-components/dist/components.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(<App />)
