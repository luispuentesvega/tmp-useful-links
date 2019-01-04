import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import './styles/App.css';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ConnectedApp extends Component {
    render () {
        return (<div className="app">
                <div className="Links">
                    <h2 className="main-title">Links</h2>
                    <List/>
                </div>
                <div className="Form">
                    <h2 className="main-title">Add Link</h2>
                    <Form/>
                </div>
            </div>
        );
    }
}

const mapDipatchToProps = dispatch => {
    return {
        onLoadData: () => dispatch(actions.dataLoaded())
    }
};

const App = connect(null, mapDipatchToProps)(ConnectedApp);

export default App;