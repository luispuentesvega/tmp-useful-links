import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
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
                <Main showCreate={showCreate}/>
            </div>
        );
  }
}

export default App;
