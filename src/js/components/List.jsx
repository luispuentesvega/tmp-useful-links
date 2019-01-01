import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        links: state.links
    }
}

const connectedList = ({ links }) => (
    <ul>
        { links.map(el => (
            <li key={el.id}> { el.link }</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(connectedList);

export default List;