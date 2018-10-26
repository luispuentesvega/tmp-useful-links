import React, { Component } from 'react';
import '../../assets/css/create.css';

class CreatePage extends Component {

    render() {
        return (
                <div className="form-create">
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="group">Topic</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="group" placeholder="Group"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" name="title" placeholder="Title"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="link">Link</label>
                        </div>
                        <div className="col-75">
                            <textarea placeholder="Link"></textarea>
                        </div>
                    </div>
                    <div className="row row-button">
                        <button>Go Back</button>
                        <button>Add</button>
                    </div>
                </div>
        )
    }
}

export default CreatePage;