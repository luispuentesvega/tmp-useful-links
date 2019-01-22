import React from 'react';
import './styles/Filter.css';
import { connect } from 'react-redux';

const Filter = props => {
    let buffer = props.topics
        .filter(topic => topic.value != '0')
        .map(topic => {
            return (<a key={topic.value} href={'#' + topic.value} className="filter-option">
                {topic.value}
            </a>)
        });
    return <p className="filter-options">{buffer}</p>;
};

const mapStateToProps = state => {
    return {
        topics: state.topics,
    };
};

export default connect(mapStateToProps)(Filter);
