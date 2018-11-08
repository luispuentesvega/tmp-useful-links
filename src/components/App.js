import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import MediaQuery from 'react-responsive';
import MaintenancePage from './pages/MaintenancePage';
import '../assets/css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Route className="Home" path="/" component={HomePage}/>
                <Route className="FormCreate" path="/create" component={CreatePage}/>
            </div>
        );
    }
}

export default App;