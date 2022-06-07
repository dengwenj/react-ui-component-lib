import React from 'react'

import Button from './components/Button'
import Menu from './components/Menu'
import MenuItem from './components/Menu/components/MenuItem'
import SubMenu from './components/Menu/components/SubMenu'

export default function App() {
  return (
    <>
      {/* Button 组件 */}
      <Button btnType='link' href='http://dengwj.vip/' target='_blank'>dengwj</Button>
      <Button disabled size='lg'>dengwj</Button>
      <Button onClick={(e) => alert('ddd')} btnType='primary'>dengwj</Button>
      <hr />

      {/* 导航菜单组件 */}
      <Menu mode='vertical' defaultIndex={2} onSelect={(idx) => console.log(idx)}>
        <MenuItem disabled>
          干干干1
        </MenuItem>
        <SubMenu title='submenu'>
          <MenuItem>
            哈哈哈1
          </MenuItem>
          <MenuItem>
            哈哈哈2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          干干干2
        </MenuItem>
        <MenuItem>
          干干干3
        </MenuItem>
      </Menu>
    </>
  )
}
