import React, { Component } from 'react';
import '../../assets/css/App.css';
import Header from '../shared/Header';
import Topics from '../shared/Topics';
import AddIcon from '../shared/AddIcon';

class HomePage extends Component {
    state = {
        showCreate: false,
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

    showCreateHandler = show => {
        this.setState({showCreate: !this.state.showCreate});
    }

    removeLink = (indexTopic, indexLink) => {
        const topics = this.state.topics;
        this.setState({
            topics: topics.map((topic, index) => topic.links.map((link, i) => indexTopic!==index && indexLink!==i))
        });
    }

    render() {
        const { showCreate, topics } = this.state;
        return (
            <div className="Home">
                <Header onShowCreateChange={this.showCreateHandler}/>
                <Topics topics={topics} showCreate={showCreate}/>
                <AddIcon onShowCreateChange={this.showCreateHandler}/>
            </div>
        );
    }
}

export default HomePage;