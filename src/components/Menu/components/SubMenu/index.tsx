import React, { Children, FC, useContext } from "react"
import classNames from "classnames"

import type { ISubMenuProps } from './types'
import { Context } from "../.."
import { MenuItemProps } from "../MenuItem/types"

const SubMenu: FC<ISubMenuProps> = ({ title, className, index, children }) => {
  const context = useContext(Context)

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    const childrenComponent = Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childrenElement, { index })
      }
      console.error('SubMenu 的子元素必须是 MenuItem 组件')
    })

    return (
      <ul className="submenu">
        {childrenComponent}
      </ul>
    )
  }

  const handleClick = () => {
    context.onSelect?.(index!)
  }

  return (
    <li className={classes} onClick={handleClick}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'

export default SubMenu
