import React from 'react'

import Button from './components/Button'
import { ButtonType } from './components/Button/types'

export default function App() {
  return (
    <>
      <Button btnType={ButtonType.Link} href='http://dengwj.vip/'>dengwj</Button>
      <Button disabled>dengwj</Button>
      <Button btnType={ButtonType.Primary}>dengwj</Button>
    </>
  )
}
