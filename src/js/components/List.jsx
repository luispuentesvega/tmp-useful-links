import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-links';
import * as actions from '../actions/index';

class ConnectedList extends Component {

    componentDidMount() {
        /*
        axios.get('/links.json')
            .then( response => {

            })
            .catch(err => {
                console.log('Error: ', err);
            });
            */
        console.log('Before Load...............');
        this.props.onLoadData();
        console.log('...............After Load..');
    }

    render() {
        return (
            <ul>
                { this.props.links.map(el => (
                    <li key={el.id}> { el.link }</li>
                ))}
            </ul>
        );
    }
}


const mapStateToProps = state => {
    return {
        links: state.links
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadData: () => dispatch(actions.dataLoaded())
    }
}

/*
const connectedList = ({ links }) => (
    <ul>
        { links.map(el => (
            <li key={el.id}> { el.link }</li>
        ))}
    </ul>
);
*/
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;