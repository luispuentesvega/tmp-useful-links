import React from 'react';
import List from './List';
import Form from './Form';

const App = () => (
    <div>
        <div>
            <h2>Links</h2>
            <List/>
        </div>
        <div>
            <h2>Add Link</h2>
            <Form/>
        </div>
    </div>
);

export default App;