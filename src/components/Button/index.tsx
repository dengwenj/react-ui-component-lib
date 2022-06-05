import React, { FC } from 'react'
import classNames from 'classnames'

import { ButtonSize, ButtonType } from './types'
import type { ButtonProps } from './types'

const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href } = props

  const className = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled
  })

  if (btnType === ButtonType.Link && href) {
    return <a className={className} href={href} target='_blank' rel="noreferrer">{children}</a>
  }

  return <button className={className} disabled={disabled}>{children}</button>
}
Button.defaultProps = {
  btnType: ButtonType.Default,
  size: ButtonSize.Default,
}

export default Button
