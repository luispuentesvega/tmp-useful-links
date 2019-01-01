import { ADD_LINK, DATA_LOADED } from "../constants/action-types";
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
                console.log('resp:::', response.data);
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
                console.log('res.data::::::::::;',res.data);
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