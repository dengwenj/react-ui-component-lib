import React, { InputHTMLAttributes, ReactElement } from "react"

type InputSize = 'lg' | 'sm'
// Omit<> 可以忽略 size 这个属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean
  size?: InputSize
  icon?: unknown
  prepend?: string | ReactElement
  append?: string | ReactElement
  className?: string
  style?: React.CSSProperties
}
