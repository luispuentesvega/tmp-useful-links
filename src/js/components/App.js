import React from 'react';
import List from './List';
import Form from './Form';
import './styles/App.css';

const App = () => (<div className="app">
        <div className="Links">
            <h2 className="main-title">Links</h2>
            <List/>
        </div>
        <div className="Form">
            <h2 className="main-title">Add Link</h2>
            <Form/>
        </div>
    </div>
);

export default App;