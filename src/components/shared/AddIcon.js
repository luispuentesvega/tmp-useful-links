import React, { Component } from 'react';
import iconAdd from '../../assets/images/add.png'

class AddIcon extends Component {
    ontoCreateChange() {
        this.props.ontoCreateChange();
    }

    render() {
        return (
            <div className="sticky-image-wrapper">
                <img src={iconAdd} height="42px" width="42px" alt="" onClick={() => {this.ontoCreateChange()}}/>
            </div>
        )
    }
}

export default AddIcon