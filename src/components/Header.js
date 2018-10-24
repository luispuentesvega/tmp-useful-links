import React, { Component } from 'react'
import share from './share.png';

class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li className="title"><h1>Useful Liks</h1><img src={share} height="40px" width="40px" alt=""/></li>
                    <li><input type="text" placeholder="Search"/></li>
                </ul>
            </nav>
        )
    }
}

export default Header