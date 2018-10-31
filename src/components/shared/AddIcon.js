import React, { Component } from 'react';
import iconAdd from '../../assets/images/add.png'

class AddIcon extends Component {
    showCreateForm() {
        this.props.onShowCreateChange();
    }

    render() {
        return (
            <div className="sticky-image-wrapper">
                <img src={iconAdd} height="42px" width="42px" alt="" onClick={() => {this.showCreateForm()}}/>
            </div>
        )
    }
}

export default AddIcon