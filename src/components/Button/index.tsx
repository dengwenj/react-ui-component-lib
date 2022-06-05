import React, { FC } from 'react'
import classNames from 'classnames'

import { ButtonSize, ButtonType } from './types'
import type { ButtonProps } from './types'

const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href, ...otherProps } = props
  console.log(otherProps)

  const className = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled
  })

  if (btnType === ButtonType.Link && href) {
    return <a className={className} href={href} {...otherProps}>{children}</a>
  }

  return <button className={className} disabled={disabled} {...otherProps}>{children}</button>
}
Button.defaultProps = {
  btnType: ButtonType.Default,
  size: ButtonSize.Default,
}

export default Button
