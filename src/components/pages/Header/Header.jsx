import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <nav className="navbar navbar-expand-sm bg-primary text-white">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/posts'>Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Header