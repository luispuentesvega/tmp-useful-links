import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addLink, initTopics} from "../actions";
import uuidv1 from 'uuid';
import './Form.css';
import Select from 'react-select';

const mapDispatchToProps = dispatch => {
    return {
        addLink: link => dispatch(addLink(link)),
        onInitTopics: () => dispatch(initTopics())
    }
}

const mapStateToProps = state => {
    return {
        topics: state.topics
    }
}

class ConnectedForm extends Component {

    constructor () {
        super();
        this.state = {
            link: '',
            topicSelected: null,
        }
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

        console.log('validate():::',this.validate());

        const { link, topicSelected } = this.state;

        if (topicSelected === null) {
            return '';
        }

        const id = uuidv1();
        const topic = topicSelected.value;
        this.props.addLink({
            link: link,
            topic: topic,
            id: id
        });
        this.setState({ link: '', topicSelected:'' });
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({ topicSelected: selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    validate() {
        return this.form.current.reportValidity();
    }

    render() {
        const { link, topic } = this.state;
        const options = this.props.topics;

        return (
            <form className="Form" ref={this.form} onSubmit={this.handleSubmit}>
                <div className="Form__Row">
                    <label htmlFor="topic">Topic: </label>
                    <Select
                        id="topic"
                        value={topic}
                        onChange={this.handleChangeSelect}
                        options={options}
                        required
                    />
                </div>
                <div className="Form__Row">
                    <label htmlFor="link">Link: </label>
                    <input
                        className="Input"
                        type="text"
                        id="link"
                        value={link}
                        onChange={this.handleChange}
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