import React from "react"

type OnSelect = (selectedIdx: string) => void
type Mode = 'vertical' | 'horizontal'
export interface MenuProps {
  defaultIndex?: string
  mode?: Mode
  className?: string
  style?: React.CSSProperties
  onSelect?: OnSelect
  children: React.ReactNode
  defaultOpenSubMenus?: string[]
}

export interface IMenuContext {
  index: string
  onSelect?: OnSelect
  mode?: Mode,
  defaultOpenSubMenus?: string[]
}
