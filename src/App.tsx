import React from 'react'

import Button from './components/Button'
import { ButtonSize, ButtonType } from './components/Button/types'

export default function App() {
  return (
    <>
      <Button btnType={ButtonType.Link} href='http://dengwj.vip/' target='_blank'>dengwj</Button>
      <Button disabled size={ButtonSize.Small}>dengwj</Button>
      <Button onClick={(e) => alert('ddd')} btnType={ButtonType.Primary}>dengwj</Button>
    </>
  )
}
