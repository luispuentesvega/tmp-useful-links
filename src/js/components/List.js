import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import './styles/List.css';

class ConnectedList extends Component {
    render() {
        let buffer = [];

        const topics = this.props.topics
			.filter(topic => topic.value!==0)
			.map(topic => topic.value);

		const links = this.props.links;
		const fetchedTopics = topics.map(topic => {
			return {
				title: topic,
				links: links.filter(link => link.topic === topic).map(link => link)
			}
		});

        fetchedTopics.map((topic, index) => {
            buffer.push(
                <li className="main-group" id={index} key={index}>
                    <h2 className="main-group__title">{topic.title}</h2>
                    <ul className="main-group__links">
                        {links.filter(link => link.topic === topic.title).map(link => (
                            <li key={link.id}>
                                <a href={link.link} target="_blank">
                                    {' '}
                                    {link.title ? link.title : '...Not Found'}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <p className="main-group__footer">
                        <span className="footer__number">{topic.links.length}</span>
                    </p>
                </li>,
            );
        });
        return <ul className="main-groups">{ buffer }</ul>;
    }
}

const mapStateToProps = state => {
    return {
        links: state.links,
        topics: state.topics,
    };
};

const mapDispatchToProps = dispatch => {
	return {
		onLoadData: () => dispatch(actions.dataLoaded()),
    };
};

const List = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedList);

export default List;
