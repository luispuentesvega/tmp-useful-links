import React, { Component } from 'react';
import Topic from './Topic';
import CreatePage from '../pages/CreatePage';

class Topics extends Component {
    render() {
        return ( <div>
                { !this.props.showCreate &&
                    <ul className="detail">
                        { this.props.topics.map((topic, index) => <Topic key={index} topic={topic}/>)}
                    </ul>
                }
                { this.props.showCreate && <CreatePage/>}
            </div>
        )
    }
}
export default Topics