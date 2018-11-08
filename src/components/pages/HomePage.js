import React, { Component } from 'react';
import '../../assets/css/App.css';
import Header from '../shared/Header';
import Topics from '../shared/Topics';
import AddIcon from '../shared/AddIcon';
import Maintenance from '../pages/MaintenancePage';
import  { Redirect } from 'react-router-dom';

class HomePage extends Component {
    state = {
        toCreate: false,
        topics: [{
            'name':'Rubiks Cube',
            'links': [
                {
                    'title': 'How to solve the Megaminx',
                    'url': 'http://www.google.com'
                },{
                    'title': 'How to solve the 3x3',
                    'url': 'http://www.google.com'
                },
            ]
            },{
            'name':'PHP',
            'links': [
                {
                    'title': 'Laravel',
                    'url': 'http://www.google.com'
                },{
                    'title': 'New features on PHP 7',
                    'url': 'http://www.google.com'
                },
            ]
            },{
                'name':'React JS',
                'links': [
                    {
                        'title': 'Redux',
                        'url': 'http://www.google.com'
                    },{
                        'title': 'How to consume an API',
                        'url': 'http://www.google.com'
                    },
                ]
            },{
            'name':'Rubiks Cube',
            'links': [
                {
                    'title': 'How to solve the Megaminx',
                    'url': 'http://www.google.com'
                },{
                    'title': 'How to solve the 3x3',
                    'url': 'http://www.google.com'
                },
            ]
            },{
                'name':'PHP',
                'links': [
                    {
                        'title': 'Laravel',
                        'url': 'http://www.google.com'
                    },{
                        'title': 'New features on PHP 7',
                        'url': 'http://www.google.com'
                    },
                ]
            },{
                'name':'React JS',
                'links': [
                    {
                        'title': 'Redux',
                        'url': 'http://www.google.com'
                    },{
                        'title': 'How to consume an API',
                        'url': 'http://www.google.com'
                    },
                ]
            },
        ]
    }

    toCreateHandler = show => {
        this.setState({toCreate: !this.state.toCreate});
        if(this.state.toCreate) {
            return <Redirect to='/create' />
        } else {
            return <Redirect to='/' />
        }
    }

    removeLink = (indexTopic, indexLink) => {
        const topics = this.state.topics;
        this.setState({
            topics: topics.map((topic, index) => topic.links.map((link, i) => indexTopic!==index && indexLink!==i))
        });
    }

    render() {
        const { toCreate, topics } = this.state;
        return (
            <div>
                <div className="Home">
                    <Header ontoCreateChange={this.toCreateHandler}/>
                    <Topics topics={topics} toCreate={toCreate}/>
                    <AddIcon ontoCreateChange={this.toCreateHandler}/>
                </div>
            </div>
        );
    }
}

export default HomePage;