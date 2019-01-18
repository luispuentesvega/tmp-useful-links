import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import './styles/List.css';
import Link from './Link';

class ConnectedList extends Component {
    updateLinkSelected = link => {
        this.props.updateLinkSelected(link);
    }

    render() {
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

        const buffer = fetchedTopics.map(topic => {
            return (
                <li className="topic" id={topic.title} key={topic.title}>
                    <h2 className="topic__title">{topic.title}</h2>
                    <ul className="topic__links">
                        {links
                            .filter(link => link.topic === topic.title)
                            .map(link => (
                            <Link
                                link={link}
                                key={link.id}
                                updateLinkSelected={()=>{this.updateLinkSelected(link)}}/>
                        ))}
                    </ul>
                    <p className="topic__footer">
                        <span className="footer__number">{topic.links.length}</span>
                    </p>
                </li>
            );
        });
        return <ul className="topics">{ buffer }</ul>;
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
		onLoadData: () => dispatch(actions.getLinksRequest()),
        deleteLink: (id) => dispatch(actions.deleteLinkRequest(id))
    };
};

const List = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ConnectedList);

export default List;
