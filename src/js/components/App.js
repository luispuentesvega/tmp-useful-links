import React, {Component} from "react";
import List from "./List";
import Filter from "./Filter";
import Form from "./Form";
import Modal from "./Form/Modal";
import "./styles/App.css";
import {connect} from "react-redux";
import * as actions from "../actions/index";
import add from "./Images/add.png";

class ConnectedApp extends Component {

    state = {
        show: false
    };

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    }

    closeModal = e => {
        this.setState({
            show: false
        });
    }

    componentDidMount() {
        this.props.onLoadTopics();
    }

    render() {
        return (
            <div className="app">
                <div className="Links">
                    <h2 className="main-title">Links</h2>
                    <Filter/>
                    <List/>
                </div>
                <div className="Form DesktopForm">
                    <h2 className="main-title">Add Link</h2>
                    <Form closeModal={this.closeModal}/>
                </div>
                <div className="icon-add" onClick={this.showModal}><img src={add}/></div>
                <Modal
                    onClose={this.showModal}
                    show={this.state.show}>
                    <Form closeModal={this.closeModal}/>
                </Modal>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadTopics: () => dispatch(actions.initTopics())
    }
};

const App = connect(null, mapDispatchToProps)(ConnectedApp);

export default App;