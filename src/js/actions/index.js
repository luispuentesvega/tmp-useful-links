import { ADD_LINK, DATA_LOADED, SET_TOPICS } from "../constants/action-types";
import axios from '../../axios-links';

export const addLinkSuccess = (payload) => {
    return {
        type: ADD_LINK,
        payload
    }
}

export const addLink = (payload) => {
    return dispatch => {
        axios.post('links.json', payload)
            .then(response => {
                dispatch(addLinkSuccess(payload));
            })
            .catch(error=> {
                console.log('Error:::::::', error);
            })
    }
}

export const dataLoaddedSuccess = (payload) => {
    return {
        type: DATA_LOADED,
        payload
    }
}

export const dataLoaded = () => {
    return dispatch => {
        axios.get('/links.json')
            .then(res => {
                const fetchedLinks = [];
                for (let key in res.data) {
                    fetchedLinks.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(dataLoaddedSuccess(fetchedLinks));
            })
            .catch(err => {
                console.log('Error:::::::::', err);
            });
    }
}

export const setTopics = (topics) => {
    return {
        type: SET_TOPICS,
        topics: topics
    }
}

export const initTopics = () => {
    return dispatch => {
        axios.get('https://react-links-1df04.firebaseio.com/topics.json')
            .then(res => {
                const fetchedTopics = [];
                console.log('res.data:::',res.data);
                for (let key in res.data) {
                    fetchedTopics.push({
                        value: key,
                        label: key
                    });
                }
                console.log('fetchedTopics::::::::',fetchedTopics);
                dispatch(setTopics(fetchedTopics));
            })
            .catch(err=> {
                console.log('Errror: ',err);
            })
    }
}