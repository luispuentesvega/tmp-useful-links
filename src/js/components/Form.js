import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addLink, initTopics} from "../actions";
import uuidv1 from 'uuid';
import './styles/Form.css';

const mapDispatchToProps = dispatch => {
    return {
        addLink: link => dispatch(addLink(link)),
        onInitTopics: () => dispatch(initTopics())
    }
};

const mapStateToProps = state => {
    return {
        topics: state.topics
    }
};

class ConnectedForm extends Component {

    constructor () {
        super();
        this.state = {
            link: "",
            topicSelected: null,
            title: ""
        };
        this.options = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.form = React.createRef();
    }

    componentDidMount() {
        this.props.onInitTopics();
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { link, topicSelected, title } = this.state;

        if (topicSelected === null) {
            return;
        }

        this.props.addLink({
            link: link,
            topic: topicSelected,
            title: title,
            id: uuidv1()
        });
        this.setState({ link: "", topicSelected:"", title:"" });
    }

    validate() {
        return this.form.current.reportValidity();
    }

    render() {
        const { link, topic, title } = this.state;
        const options = this.props.topics;

        return (
            <form className="Form" ref={this.form} onSubmit={this.handleSubmit}>
                <div className="Form__Row">
                    <label htmlFor="topicSelected">Topic: </label>
                    <select
                        id="topicSelected"
                        value={topic}
                        onChange={this.handleChange}
                        required>
                        { options!=undefined ?
                            options.map(el => <option key={el.value}>{el.label}</option>)
                        : null }
                    </select>
                </div>
                <div className="Form__Row">
                    <label htmlFor="link">Link: </label>
                    <input
                        className="Input"
                        type="text"
                        id="link"
                        value={link}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="Form__Row">
                    <label htmlFor="title">Title:</label>
                    <input
                        className="Input"
                        type="text"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="Form__Row">
                    <button className="Btn Btn__Save" type="submit">SAVE</button>
                </div>
            </form>
        );
    }
}

const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;