import React from 'react'

import Button from './components/Button'
import Menu from './components/Menu'
import MenuItem from './components/Menu/components/MenuItem'

export default function App() {
  return (
    <>
      {/* Button 组件 */}
      <Button btnType='link' href='http://dengwj.vip/' target='_blank'>dengwj</Button>
      <Button disabled size='lg'>dengwj</Button>
      <Button onClick={(e) => alert('ddd')} btnType='primary'>dengwj</Button>

      {/* 导航菜单组件 */}
      <Menu onSelect={(idx) => console.log(idx)}>
        <MenuItem index={0}>
          干干干1
        </MenuItem>
        <MenuItem index={1}>
          干干干2
        </MenuItem>
        <MenuItem index={2}>
          干干干3
        </MenuItem>
      </Menu>
    </>
  )
}
