import React from 'react'

const NavItem = ({link}) => {
  return (
    <li><a href={link.link}>{link.name}</a></li>
  )
}

export default NavItem