import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import "./styles/List.css";

class ConnectedList extends Component {
    render() {
        let buffer = [];
        for (let index in this.props.groups) {
            const links = this.props.groups[index];
            buffer.push( <li className="main-group" id={index} key={index}>
                <h2 className="main-group__title">{ index }</h2>
                <ul className="main-group__links">
                    { links.map(ele => (
                        <li key={ele.id}><a href={ele.link} target="_blank"> { ele.title ? ele.title : "...no found" }</a></li>
                    ))}
                </ul>
                <p className="main-group__footer"><span className="footer__number">{ links.length }</span></p>
            </li>);
        }

        return (
            <ul className="main-groups">
                { buffer }
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        links: state.links,
        groups: state.groups
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadData: () => dispatch(actions.dataLoaded())
    }
};

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;