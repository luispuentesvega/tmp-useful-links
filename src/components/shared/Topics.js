import React, { Component } from 'react';
import Topic from './Topic';
import CreatePage from '../pages/CreatePage';

class Topics extends Component {
    render() {
        return (
            <div>
                { !this.props.showCreate &&
                    <ul className="detail">
                        <Topic/>
                        <Topic/>
                        <Topic/>
                    </ul>
                }
                { this.props.showCreate && <CreatePage/>}
            </div>
        )
    }
}
export default Topics