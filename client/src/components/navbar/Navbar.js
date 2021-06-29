import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <div className="nav_content">
                        <ul className="nav_lists">
                            <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
                            <li className="nav_item"><Link to="/literature" className="nav_link">Literature</Link></li>
                            <li className="nav_item"><Link to="/education" className="nav_link">Education</Link></li>
                            <li className="nav_item"><Link to="/arts" className="nav_link">Arts</Link></li>
                            <li className="nav_item"><Link to="/tourism" className="nav_link">Tourism</Link></li>
                            <li className="nav_item"><Link to="/politics" className="nav_link">Politics</Link></li>
                            <li className="nav_item"><Link to="/technology" className="nav_link">Technology</Link></li>
                            <li className="nav_item"><Link to="/economics" className="nav_link">Economics</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
