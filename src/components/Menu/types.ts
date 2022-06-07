import React from "react"

type OnSelect = (selectedIdx: number) => void
type Mode = 'vertical' | 'horizontal'
export interface MenuProps {
  defaultIndex?: number
  mode?: Mode
  className?: string
  style?: React.CSSProperties
  onSelect?: OnSelect
  children: React.ReactNode
}

export interface IMenuContext {
  index: number
  onSelect?: OnSelect
  mode?: Mode
}
