import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLink } from "../actions";
import uuidv1 from 'uuid';

const mapDispatchToProps = dispatch => {
    return {
        addLink: link => dispatch(addLink(link))
    }
}

class ConnectedForm extends Component {
    constructor () {
        super();
        this.state = {
            link: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { link } = this.state;
        const id = uuidv1();
        this.props.addLink({link, id});
        this.setState({ link: '' });
    }

    render() {
        const { link } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="link">Link</label>
                    <input
                        type="text"
                        id="link"
                        value={link}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;