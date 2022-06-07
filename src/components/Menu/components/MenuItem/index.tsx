import React, { FC, useContext } from "react"
import classNames from "classnames"

import { Context } from '../../index'

import type { MenuItemProps } from './types'

/**
 * @author dengwenjie
 * MenuItem 导航菜单每一项组件
 */
const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, children, index, disabled, style } = props
  const context = useContext(Context)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index && !disabled
  })

  const handleClick = () => {
    if (!disabled) context.onSelect?.(index)
  }

  return (
    <>
      <li className={classes} style={style} onClick={handleClick}>
        {children}
      </li>
    </>
  )
}

export default MenuItem
