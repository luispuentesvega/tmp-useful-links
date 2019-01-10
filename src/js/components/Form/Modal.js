import React, { Component } from "react";
import "../styles/Modal.css";

class Modal extends Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if(!this.props.show){
            return null;
        }

        return (
            <div className="modal" id="modal">
                <section className="modal-main">
                    <div
                        className="closeModal"
                        onClick={e => {
                            this.onClose(e)
                        }}>X</div>
                    {this.props.children }
                </section>
            </div>
        );
    }
}
export default Modal;