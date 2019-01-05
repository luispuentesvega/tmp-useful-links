import React, { Component } from "react";
import List from "./List";
import Filter from "./Filter";
import Form from "./Form";
import "./styles/App.css";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class ConnectedApp extends Component {

    componentDidMount() {
        this.props.onLoadTopics();
        this.props.onLoadData();
    }

    render () {
        return (<div className="app">
                <div className="Links">
                    <h2 className="main-title">Links</h2>
                    <Filter/>
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

const mapDispatchToProps = dispatch => {
    return {
        onLoadData: () => dispatch(actions.dataLoaded()),
        onLoadTopics: () => dispatch(actions.initTopics())
    }
};

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;