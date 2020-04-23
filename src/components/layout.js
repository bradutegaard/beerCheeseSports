import React from "react"
import "../styles/layout.css"
import { Link } from 'gatsby'
import logo from "../../static/beercheese.png" // Tell Webpack this JS file uses this image

console.log(logo)
const ListLink = props =>(
    <li style={{  display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div>
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to='/' style={{ textShadow: `none`, backgroundImage: `none` }}>
                <img src={logo} style={{ display: `inline`}}></img>
            </Link>
            <ul style={{ listStyle: 'none', float: 'right' }}>
                <ListLink to='/'>Home</ListLink>
                <ListLink to='/about'>About</ListLink>
                <ListLink to='/contact'>Contact</ListLink>
            </ul>
        </header>
    {children}
    </div>
)