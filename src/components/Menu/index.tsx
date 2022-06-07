import React, { FC, createContext, useState, Children } from "react"
import classNames from "classnames"

import type { MenuProps, IMenuContext } from './types'
import type { MenuItemProps } from './components/MenuItem/types'

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
    onSelect: handleClick,
    mode
  }

  const renderChildren = () => (
    Children.map(
      children, 
      (child, index) => {
        // console.log(child)
        const childElement = child as React.FunctionComponentElement<MenuItemProps>
        const { displayName } = childElement.type
        if (displayName === 'MenuItem' || 'SubMenu') {
          // 自动添加了 index 属性 不用在 MenuItem 组件哪里写 index 了
          return React.cloneElement(childElement, { index })
        }
        console.error('子节点必须是 MenuItem 组件')
      }
    )
  )

  return (
    <ul className={classes} style={style}>
      <Context.Provider value={value}>
        {renderChildren()}
      </Context.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu
