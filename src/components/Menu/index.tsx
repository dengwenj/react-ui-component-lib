import React, { FC } from "react"
import classNames from "classnames"

import type { MenuProps } from './types'

/**
 * @author dengwenjie
 * Menu 导航菜单组件
 */
const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, style, children, onSelect } = props

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
