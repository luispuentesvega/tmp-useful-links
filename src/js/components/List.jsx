import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ConnectedList extends Component {
    componentDidMount() {
        this.props.onLoadData();
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

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;