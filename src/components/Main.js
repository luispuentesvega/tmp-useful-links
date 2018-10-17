import React, { Component } from 'react'
import Topic from './Topic';
import Link from './Link';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Topic/>
                <Link/>
            </div>
        )
    }
}
export default Main