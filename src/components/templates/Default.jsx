import React from 'react'

import AppHeader from '../organisms/AppHeader'
import AppFooter from '../organisms/AppFooter'
import DrawerMenu from '../molecules/DrawerMenu'

export default function Default(props) {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
  <div className="wrapper">
    <DrawerMenu open={isOpen} setIsOpen={setIsOpen}/>
    <AppHeader setIsOpen={setIsOpen}/>
    {props.children}
    <AppFooter />
  </div>
  )
}
