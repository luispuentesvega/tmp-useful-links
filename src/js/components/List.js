import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import './styles/List.css';
import Link from './Link';

class ConnectedList extends Component {
    handleEditLink = link => {
       this.props.handleEditLink(link);
    }

    handleDeleteLink = id => {
        this.props.deleteLink(id);
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
                                handleDeleteLink={()=>this.handleDeleteLink(link.id)}
                                handleEditLink={()=>{this.handleEditLink(link)}}/>
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
