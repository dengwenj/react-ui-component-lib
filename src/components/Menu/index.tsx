import React, { FC, createContext, useState } from "react"
import classNames from "classnames"

import type { MenuProps, IMenuContext } from './types'

export const Context = createContext<IMenuContext>({ index: 0 })

/**
 * @author dengwenjie
 * Menu 导航菜单组件
 */
const Menu: FC<MenuProps> = (props) => {
  const { defaultIndex, mode, className, style, children, onSelect } = props
  const [activeIndex, setActiveIndex] = useState(defaultIndex!)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  const handleClick = (index: number) => {
    setActiveIndex(index)
    onSelect?.(index)
  }

  const value = {
    index: activeIndex,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style}>
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
