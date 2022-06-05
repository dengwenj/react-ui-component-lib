import React from "react"

type ButtonSize = 'lg' | 'sm' | 'df'

type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// Partial<T> 可以把属性都设置成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
