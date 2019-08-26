import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
return (
<header>
    <span class="name-logo"><img src="img/dhlogo.png" alt="" class="logo" /></span>
        <nav>
            <Link to="/"><img src="img/home.png" class="nav-icon" alt="" />Home</Link>
            <Link to="/work"><img src="img/work.png" class="nav-icon" alt="" />Work</Link>
            <Link to="/contact"><img src="img/contact.png" class="nav-icon" alt="" />Contact</Link> 
        </nav>
        <div class="social-box">
        <Link to="https://twitter.com/dannehess" target="_blank"><img src="img/twitter.png" class="social-media-icon" alt="" /></Link> 
        <Link to="https://linkedin.com/in/danielhessling" target="_blank"><img src="img/linkedin.png" class="social-media-icon" alt="" /></Link> 
        </div>
</header>
)
}

export default Header