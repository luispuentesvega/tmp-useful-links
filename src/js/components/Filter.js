import React from 'react';
import './styles/Filter.css';
import { connect } from 'react-redux';

const Filter = props => {
    let buffer = [];
    for (let index in props.groups) {
        buffer.push(
            <a key={index} href={'#' + index} className="filter-option">
                {index}
            </a>,
        );
    }

    return <p className="filter-options">{buffer}</p>;
};

const mapStateToProps = state => {
    return {
        groups: state.groups,
    };
};

export default connect(mapStateToProps)(Filter);
