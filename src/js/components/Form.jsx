import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLink } from "../actions";
import uuidv1 from 'uuid';
import styles from './Form.css';

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

        const BtnClasses = ['Btn'];

        return (
            <form className={styles.Form} onSubmit={this.handleSubmit}>
                <div className={styles.Form__Row}>
                    <label htmlFor="link">Link: </label>
                    <input
                        className={styles.Input}
                        type="text"
                        id="link"
                        value={link}
                        onChange={this.handleChange}
                    />
                </div>
                <div className={styles.Form__Row}>
                    <button className={[styles.Btn, styles.Btn__Save].join(' ')} type="submit">SAVE</button>
                </div>
            </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;