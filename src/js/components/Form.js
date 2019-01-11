import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLink, initTopics } from '../actions';
import uuidv1 from 'uuid';
import './styles/Form.css';
import TextInput from './Form/TextInput';

const mapDispatchToProps = dispatch => {
    return {
        addLink: link => dispatch(addLink(link)),
        onInitTopics: () => dispatch(initTopics()),
    };
};

const mapStateToProps = state => {
    return {
        topics: state.topics,
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            link: '',
            topicSelected: 0,
            title: '',
        };
        this.options = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModalChild = this.closeModalChild.bind(this);
        this.showNotificationChild = this.showNotificationChild.bind(this);
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

        if (topicSelected === 0) {
            return;
        }

        this.props.addLink({
            link: link,
            topic: topicSelected,
            title: title,
            id: uuidv1(),
        });

        this.closeModalChild();
        this.showNotificationChild();

        this.setState({ link: '', topicSelected: 0, title: '' });
    }

    closeModalChild() {
        this.props.closeModal();
    }

    showNotificationChild() {
        this.props.showNotification();
    }

    validate() {
        return this.form.current.reportValidity();
    }

    render() {
        const { link, topic, title } = this.state;
        const options = this.props.topics;

        return (
            <div>
                <form
                    className="Form"
                    ref={this.form}
                    onSubmit={this.handleSubmit}
                >
                    <div className="Form__Row">
                        <h3>Add New Link</h3>
                    </div>
                    <div className="Form__Row">
                        <select
                            className="Form__Select"
                            id="topicSelected"
                            value={topic}
                            onChange={this.handleChange}
                            required
                        >
                            {options != undefined
                                ? options.map(el => (
                                      <option key={el.value}>{el.label}</option>
                                  ))
                                : null}
                        </select>
                    </div>
                    <div className="Form__Row">
                        <TextInput
                            value={link}
                            placeholder="Link"
                            id="link"
                            changed={event => {
                                this.handleChange(event);
                            }}
                        />
                    </div>
                    <div className="Form__Row">
                        <TextInput
                            value={title}
                            placeholder="Title"
                            id="title"
                            changed={event => {
                                this.handleChange(event);
                            }}
                        />
                    </div>
                    <div className="Form__Row">
                        <button className="Btn Btn--Save" type="submit">
                            SAVE
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const Form = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedForm);

export default Form;
