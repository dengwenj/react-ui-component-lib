import React from "react"

export interface MenuProps {
  defaultIndex?: number
  mode?: 'vertical' | 'horizontal'
  className?: string
  style?: React.CSSProperties
  onSelect?: (selectedIdx: number) => void
  children: React.ReactNode
}
