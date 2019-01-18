import * as actionTypes from '../constants/action-types';
import axios from '../../axios-links';
import store from '../store/index';
import { GET_LINKS_FAILURE } from "../constants/action-types";

export const addLinkRequest = payload => {
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

export const addLinkSuccess = payload => {
    return {
        type: actionTypes.ADD_LINK_SUCCESS,
        link: payload,
    };
};

export const editLinkRequest = payload => {
    return dispatch => {
        axios
            .put(`links/${payload.id}.json`, payload)
            .then(res => {
                dispatch(getLinksRequest());
            })
            .catch(err => {
                console.log('Error::::', err);
            })
    }
};

export const editLinkSuccess = payload => {
    return {
        type: actionTypes.EDIT_LINK_SUCCESS,
        link: payload
    }
};

export const deleteLinkRequest = id => {
    return dispatch => {
        axios
            .delete(`links/${id}.json`)
            .then(res => {
                dispatch(getLinksRequest());
            })
            .catch(error => {
                console.log('Error::', error);
            })
    }
};

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
};

export const getTopicsSuccess = topics => {
    return {
        type: actionTypes.GET_TOPICS_SUCCESS,
        topics: topics,
    };
};

export const getTopicsRequest = () => {
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
                dispatch(getTopicsSuccess(fetchedTopics));
                dispatch(getLinksRequest());
            })
            .catch(err => {
                console.log('Errror: ', err);
            });
    };
};
