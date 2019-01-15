import * as actionTypes from '../constants/action-types';

const initialState = {
    links: [],
    topics: [],
    error: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LINK:
            return {
                ...state,
                links: state.links.concat(action.link),
            };
        case actionTypes.GET_LINKS_SUCCESS:
            return {
                ...state,
                links: action.links,
            };
        case actionTypes.GET_LINKS_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case actionTypes.SET_TOPICS:
            return {
                ...state,
                topics: action.topics,
            };
        default:
            return state;
    }
};

export default rootReducer;
