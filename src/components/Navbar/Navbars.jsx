import React from 'react'
import "./Navbars.css"
const Navbars = ({menu}) => {
    
  return (
    <div>
        <ul className='navbars'>
            {
                menu && menu.map((link)=>{
                    return <li key={link.id}><a href={link.link}>{link.name}</a></li>
                    
                })
            }
        </ul>
    </div>
  )
}

export default Navbars