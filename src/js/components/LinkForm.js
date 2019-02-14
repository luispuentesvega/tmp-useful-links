import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addLinkRequest, editLinkRequest, getTopicsRequest} from '../actions';
import uuidv1 from 'uuid';
import './styles/Form.css';
import TextInput from './Form/TextInput';

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            link: '',
            topicSelected: 0,
            title: '',
            id: null,
        };

        this.options = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModalChild = this.closeModalChild.bind(this);
        this.showNotificationChild = this.showNotificationChild.bind(this);
        this.form = React.createRef();
    }
    componentDidUpdate(prevProps) {
        if (prevProps != this.props) {
            let nextProps = this.props;
            if (nextProps.hasOwnProperty('linkSelected') && nextProps.linkSelected.hasOwnProperty('link')) {
                this.setState({
                    link: nextProps.linkSelected.link,
                    topicSelected: nextProps.linkSelected.topic,
                    title: nextProps.linkSelected.title,
                    id: nextProps.linkSelected.id
                });
            }
        }
    }

    componentDidMount() {
        this.props.onInitTopics();
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { link, topicSelected, title, id } = this.state;

        if (topicSelected === 0) {
            return;
        }

        if (id != null) {
            this.props.editLink({
                link: link,
                topic: topicSelected,
                title: title,
                id: id,
            });

        } else {
            this.props.addLink({
                link: link,
                topic: topicSelected,
                title: title,
                id: uuidv1(),
            });
        }

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
        let { link, topicSelected, title } = this.state;
        let options = this.props.topics;

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
                            value={topicSelected || '0'}
                            onChange={this.handleChange}
                            required
                        >
                            {options !== undefined
                                ? options.map(el => (
                                    <option key={el.value}>{el.label}</option>
                                ))
                                : null}
                        </select>
                    </div>
                    <div className="Form__Row">
                        <TextInput
                            value={link || '' }
                            placeholder="Link"
                            id="link"
                            changed={event => {
                                this.handleChange(event);
                            }}
                        />
                    </div>
                    <div className="Form__Row">
                        <TextInput
                            value={title || ''}
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

const mapDispatchToProps = dispatch => {
    return {
        addLink: link => dispatch(addLinkRequest(link)),
        editLink: link => dispatch(editLinkRequest(link)),
        onInitTopics: () => dispatch(getTopicsRequest()),
    };
};

const mapStateToProps = state => {
    return {
        topics: state.topics,
    };
};

const LinkForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedForm);

export default LinkForm;
