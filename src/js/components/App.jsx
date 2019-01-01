import React from 'react';
import List from './List';
import Form from './Form';
import styles from './App.css';

const App = () => (
    <div className={styles.App}>
        <div className={styles.Links}>
            <h2>Links</h2>
            <List/>
        </div>
        <div className={styles.Form}>
            <h2>Add Link</h2>
            <Form/>
        </div>
    </div>
);

export default App;