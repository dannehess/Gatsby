import React from "react"
import { Link } from "gatsby"
import styles from "../pages/header-modules.css"
import logo from '../img/dannelogo.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link style={{ padding: `10px 20px`, textDecoration: 'none', color: '#1a1a1d' }} to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div>
    <header className={styles.header}>
    <nav className={styles.nav}>
       <ListLink to="/"> <img src={logo} style={{ width: `40px`, marginBottom: `0px`, marginLeft: `20px`}} alt=" "/></ListLink>
      <ul style={{ listStyle: `none`, float: `right`, marginTop: `9px`}}>
        <ListLink to="/">About</ListLink>
        <ListLink to="/work/">Work</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    <div style={{ display: `inline-block`, position: `absolute`, right: `30px`, marginTop: `6px`, float: `right` }}>
    <a href="https://www.linkedin.com/in/danielhessling"><img src={linkedin} style={{ width: `30px`, marginBottom: `6px`, marginRight: `10px`}} alt=" "/></a>
    <a href="https://twitter.com/dannehess"><img src={twitter} style={{ width: `30px`, marginBottom: `6px`, marginLeft: `10px`}} alt=" "/></a>
    </div>
    </nav>
</header>
{children}
</div>
)