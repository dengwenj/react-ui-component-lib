import React, { FC } from 'react'
import classNames from 'classnames'

import type { ButtonProps } from './types'

/**
 * @author dengwenjie
 * Button 按钮组件
 */
const Button: FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...otherProps } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled
  })

  if (btnType === 'link' && href) {
    return <a className={classes} href={href} {...otherProps}>{children}</a>
  }

  return <button className={classes} disabled={disabled} {...otherProps}>{children}</button>
}
Button.defaultProps = {
  btnType: 'default',
  size: 'df',
}

export default Button
