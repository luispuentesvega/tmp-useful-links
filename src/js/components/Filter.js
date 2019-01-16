import React from 'react';
import './styles/Filter.css';
import { connect } from 'react-redux';

const Filter = props => {
    let buffer = [];
    for (let index in props.topics) {
        console.log(props.topics[index]);
        if (index ==0) {
            continue;
        }

        buffer.push(
            <a key={props.topics[index].value} href={'#' + props.topics[index].value} className="filter-option">
                {props.topics[index].value}
            </a>,
        );
    }

    return <p className="filter-options">{buffer}</p>;
};

const mapStateToProps = state => {
    return {
        topics: state.topics,
    };
};

export default connect(mapStateToProps)(Filter);
