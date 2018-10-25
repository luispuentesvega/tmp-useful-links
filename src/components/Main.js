import React, { Component } from 'react'
import List from './List';

class Main extends Component {
    render() {
        return (
            <ul className="detail">
                <List/>
                <List/>
                <List/>
            </ul>
        )
    }
}
export default Main