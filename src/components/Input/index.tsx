import React, { FC } from 'react'
import classNames from 'classnames'

import type { InputProps } from './types'

const Input: FC<InputProps> = (props) => {
  const { disabled, size, prepend, append, className, style, ...otherProps } = props

  const classes = classNames('input-wrapper', className, {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })

  return (
    <div className={classes} style={style}>
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      <input 
        className="input-inner"
        disabled={disabled}
        {...otherProps}
      />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  )
}

export default Input
