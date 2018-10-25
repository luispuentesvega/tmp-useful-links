import React, { Component } from 'react';
import List from './List';
import Create from './Create';

class Main extends Component {
    render() {
        return (
            <div>
                { !this.props.showCreate &&
                    <ul className="detail">
                        <List/>
                        <List/>
                        <List/>
                    </ul>
                }
                { this.props.showCreate && <Create/>}
            </div>
        )
    }
}
export default Main