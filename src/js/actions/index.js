import * as actionTypes from '../constants/action-types';
import axios from '../../axios-links';
import store from '../store/index';
import {GET_LINKS_FAILURE} from "../constants/action-types";

export const addLinkSuccess = payload => {
    return {
        type: actionTypes.ADD_LINK,
        link: payload,
    };
};

export const addLink = payload => {
    return dispatch => {
        axios
            .post('links.json', payload)
            .then(response => {
                dispatch(addLinkSuccess(payload));
            })
            .catch(error => {
                console.log('Error:::::::', error);
            });
    };
};

export const getLinksSuccess = links => {
    return {
        type: actionTypes.GET_LINKS_SUCCESS,
        links: links,
    };
};

export const getLinksError = error => {
    return {
        type: GET_LINKS_FAILURE,
        error: error
    }
}

export const getLinksRequest = () => {
    return dispatch => {
        axios
            .get('/links.json')
            .then(res => {
                const fetchedLinks = [];
                for (let key in res.data) {
                    fetchedLinks.push({
                        ...res.data[key],
                        id: key,
                    });
                }
                dispatch(getLinksSuccess(fetchedLinks));
            })
            .catch(err => {
                dispatch(getLinksError(err));
            });
    };
};

export const setTopics = topics => {
    return {
        type: actionTypes.SET_TOPICS,
        topics: topics,
    };
};

export const initTopics = () => {
    return dispatch => {
        axios
            .get('https://react-links-1df04.firebaseio.com/topics.json')
            .then(res => {
                const fetchedTopics = [
                    {
                        value: 0,
                        label: '..Choose a Topic...',
                    },
                ];
                for (let key in res.data) {
                    fetchedTopics.push({
                        value: key,
                        label: key,
                    });
                }
                dispatch(setTopics(fetchedTopics));
                dispatch(dataLoaded());
            })
            .catch(err => {
                console.log('Errror: ', err);
            });
    };
};
