import React from 'react'
import "./Navbars.css"
import NavItem from './NavItem'
const Navbars = ({menu}) => {
    
  return (
    <div>
        <ul className='navbars'>
            {
                menu && menu.map((link)=>{
                    return <NavItem key={link.id} link={link}/>
                    
                })
            }
        </ul>
    </div>
  )
}

export default Navbars