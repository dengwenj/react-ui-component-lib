import React, { FC } from "react"
import classNames from "classnames"

import type { MenuItemProps } from './types'

/**
 * @author dengwenjie
 * MenuItem 导航菜单每一项组件
 */
const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, children, index, disabled, style } = props

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled
  })

  return (
    <>
      <li className={classes} style={style}>
        {children}
      </li>
    </>
  )
}

export default MenuItem
