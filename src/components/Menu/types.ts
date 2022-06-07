import React from "react"

type OnSelect = (selectedIdx: number) => void
export interface MenuProps {
  defaultIndex?: number
  mode?: 'vertical' | 'horizontal'
  className?: string
  style?: React.CSSProperties
  onSelect?: OnSelect
  children: React.ReactNode
}

export interface IMenuContext {
  index: number
  onSelect?: OnSelect
}
