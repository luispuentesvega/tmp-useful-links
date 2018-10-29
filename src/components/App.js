import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import MaintenancePage from './pages/MaintenancePage';
import '../assets/css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <HomePage/>
                <MaintenancePage/>
            </div>
        );
  }
}

export default App;
