import React, { Component } from 'react';
import '../../assets/css/App.css';
import Header from '../shared/Header';
import Topics from '../shared/Topics';

class HomePage extends Component {
    state = {
        showCreate: false
    }

    showCreateHandler = show => {
        this.setState({showCreate: !this.state.showCreate});
    };

    render() {
        const { showCreate } = this.state;
        return (
            <div>
                <Header onShowCreateChange={this.showCreateHandler} />
                <Topics showCreate={showCreate}/>
            </div>
        );
    }
}

export default HomePage;