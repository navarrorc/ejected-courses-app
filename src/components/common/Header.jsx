import React from 'react'
import { Link, IndexLink } from 'react-router'

import './Header.scss'

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Courses Page</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    )
}

export default Header