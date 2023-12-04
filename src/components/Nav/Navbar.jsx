import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/NOFOLogomed.svg'
import './Nav.scss'
import { useState, useEffect } from 'react'
import _ from 'lodash';


export const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const sizeChange = _.debounce(() => {
        if (window.scrollY >= 20){
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    },10)

        window.addEventListener('scroll', sizeChange);

    

    return (
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <Link to={'/'}>
            <img src={Logo} alt="Logo" />
            </Link>
            <ul>
                <li><NavLink to={'#about'}>Om os</NavLink></li>
                <li><NavLink>Samarbejdspartnere</NavLink></li>
                <li><NavLink>Bliv medlem</NavLink></li>
                <li><NavLink>Kontakt</NavLink></li>
                <li><NavLink>Status</NavLink></li>
                <li><NavLink>Åbningstider</NavLink></li>
            </ul>
        </nav>
    )
}
