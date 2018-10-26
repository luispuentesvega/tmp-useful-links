import React, { Component } from 'react';
import share from '../../assets/images/share.png';

class Header extends Component {
    showCreateForm() {
        this.props.onShowCreateChange();
    }
    render() {
        return (
            <nav>
                <ul>
                    <li className="title"><h1>Useful Links</h1><img src={share} onClick={()=>{this.showCreateForm()}} height="40px" width="40px" alt=""/></li>
                    <li><input type="text" placeholder="Search"/></li>
                </ul>
            </nav>
        )
    }
}

export default Header