import React, { Component } from 'react';
import deleteIcon from './Images/remove.png';
import editIcon from './Images/edit.png';

class Link extends Component {
    handleDeleteLink = id => {
        this.props.deleteLink(id);
    }

    handleEditLink = link => {
        this.props.updateLinkSelected(link);
    }

    render () {
        let link = this.props.link;
        return (
            <li key={link.id}>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {' '}
                    {link.title ? link.title : '...Not Found'}
                </a>
                <img src={deleteIcon} alt="delete" className="deleteIcon" onClick={()=>this.handleDeleteLink(link.id)}/>
                <img src={editIcon} alt="edit" className="editIcon" onClick={() =>this.handleEditLink(link)}/>
            </li>
        );
    }
}

export default Link;