import React, { Children, FC, useContext, useState } from "react"
import classNames from "classnames"

import type { ISubMenuProps } from './types'
import { Context } from "../.."
import { MenuItemProps } from "../MenuItem/types"

const SubMenu: FC<ISubMenuProps> = ({ title, className, index, children }) => {
  const [menuOpen, setMenuOpen] = useState(false) 
  const context = useContext(Context)

  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    })

    const childrenComponent = Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childrenElement.type.displayName === 'MenuItem') {
        return childrenElement
        // return React.cloneElement(childrenElement, { index })
      }
      console.error('SubMenu 的子元素必须是 MenuItem 组件')
    })

    return (
      <ul className={subMenuClasses}>
        {childrenComponent}
      </ul>
    )
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // context.onSelect?.(index!)
    setMenuOpen(!menuOpen)
  }


  const click = context.mode === 'vertical' ? { onClick: handleClick } : {}
  const hover = context.mode === 'horizontal' ? {
     onMouseEnter: () => setMenuOpen(true), 
     onMouseLeave: () => setMenuOpen(false)
  } : {}

  return (
    <li className={classes} {...hover}>
      <div className="submenu-title" {...click}>{title}</div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'

export default SubMenu
